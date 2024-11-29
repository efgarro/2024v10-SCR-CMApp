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
import { render } from "react-dom";
import { Watch } from "@mui/icons-material";

let stepUnoCounter = 0;

const RegisterPlaceStepUno = () => {
  const {
    defaultPlaceStore,
    placeStore,
    dispatch,
    activePlaceType,
    setActivePlaceType,
    isOnNextStepOne,
    setNextStepOne,
  } = useRegisterPlace();

  const methodsTypeLoc = useForm({
    defaultValues: placeStore.type_loc,
    resolver: zodResolver(typeLocSchema),
  });

  const watchTypeLoc = useWatch({
    control: methodsTypeLoc.control,
  }) as IType_Loc;

  stepUnoCounter++;

  React.useEffect(() => {
    if (!_.isEqual(watchTypeLoc, placeStore.type_loc)) {
      setNextStepOne(false);
    }
  }, [watchTypeLoc]);

  return (
    <div className={`${styles.registerPlace_box}`}>
      <FormProvider {...methodsTypeLoc}>
        <form
          onSubmit={methodsTypeLoc.handleSubmit((d) => {
            console.log(d);
            console.log(isOnNextStepOne);
            setNextStepOne(true);
            dispatch({
              key: "placeStore",
              type: "type_loc",
              formValues: d,
            });
          })}
        >
          <Paper
            className="layout_flexCol"
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
          <div className={`layout_flexRow ${styles.typeLoc_box}`}>
            <TypeLoc_Place />
            <TypeLoc_Region />
            <TypeLoc_Hub />
          </div>

          <div className={`${styles.properties_box}`}>
            <div className={`layout_flexCol ${styles.properties_wrapper}`}>
              <Button
                type="submit"
                // color="#F000D0"
                // disabled={
                //   (isOnNextStepOne ? true : false) ||
                //   _.isEqual(watchTypeLoc, placeStore.type_loc)
                //     ? true
                //     : false
                // }
                // disabled={!_.isEqual(watchTypeLoc, placeStore.type_loc)}
                variant="outlined"
                sx={{
                  color: "F000D0",
                  // background: "#a4539935",
                  my: "1rem",
                }}
              >
                Submit Form
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

export default RegisterPlaceStepUno;
