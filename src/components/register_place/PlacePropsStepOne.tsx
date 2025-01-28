import * as React from "react";

import { useForm, FormProvider, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRegisterPlace } from "./RegisterPlaceContext";

import * as _ from "lodash";

import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  Button,
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import TypeLoc_Region from "./TypeLoc_Region";
import TypeLoc_Place from "./TypeLoc_Place";
import TypeLoc_Hub from "./TypeLoc_Hub";

import { IType_Loc, typeLocSchema } from "../../types/scrTypes";

import styles from "../../css/registerPlace.module.css";

let stepUnoCounter = 0;

const PlacePropsStepOne = () => {
  const {
    placePropsStore,
    dispatchPlacePropsStore,
    activePlaceType,
    isOnNextStep,
    setNextStep,
  } = useRegisterPlace();

  const methodsTypeLoc = useForm({
    defaultValues: placePropsStore.type_loc,
    resolver: zodResolver(typeLocSchema),
  });

  const watchTypeLoc = useWatch({
    control: methodsTypeLoc.control,
  }) as IType_Loc;

  stepUnoCounter++;

  React.useEffect(() => {
    if (!_.isEqual(watchTypeLoc, placePropsStore.type_loc)) {
      setNextStep(false);
    }
  }, [watchTypeLoc]);

  return (
    <div className={`${styles.registerPlace_box}`}>
      <FormProvider {...methodsTypeLoc}>
        <form
          onSubmit={methodsTypeLoc.handleSubmit((d) => {
            console.log(d);
            console.log(isOnNextStep);
            setNextStep(true);
            dispatchPlacePropsStore({
              key: "placePropsStore",
              type: "type_loc",
              formValues: d,
            });
          })}
        >
          <Paper
            className="core_flexCol"
            sx={{
              justifyContent: "center",
              mb: "2rem",
              height: 50,
              background: "#a4539935",
            }}
            square
            elevation={0}
          >
            <Typography sx={{ pl: "2rem" }} variant="h6">
              Place Type and Location
            </Typography>
          </Paper>
          <div className={`core_flexRow ${styles.typeLoc_box}`}>
            <TypeLoc_Place />
            <TypeLoc_Region />
            <TypeLoc_Hub />
          </div>

          <div className={`${styles.properties_box}`}>
            <div className={`core_flexCol core_wrapperSm`}>
              <Button
                type="submit"
                // color="#F000D0"
                // disabled={
                //   (isOnNextStep ? true : false) ||
                //   _.isEqual(watchType, placePropsStore.type_loc)
                //     ? true
                //     : false
                // }
                // disabled={!_.isEqual(watchTypeLoc, placePropsStore.type_loc)}
                variant="outlined"
                sx={{
                  color: "F000D0",
                  // background: "#a4539935",
                  my: "1rem",
                }}
              >
                Save Type & Location
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
      <p>{activePlaceType}</p>
      <p>{stepUnoCounter}</p>
    </div>
  );
};

export default PlacePropsStepOne;
