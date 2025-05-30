import * as React from "react";
let renderCounter = 0;
import { useForm, FormProvider, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as _ from "lodash";
import { v7 as uuidv7 } from "uuid";

import { flattenObject } from "../../utils/flattenObj";

import { useRegisterPlace } from "./RegisterPlaceContext";

import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  Button,
} from "@mui/material";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

import BaseFeatures from "./BaseFeatures";
import Geolocation from "./Geolocation";

import { lodgePropsFormSchema, ILodge } from "../../types/scrTypes";

import styles from "../../css/registerPlace.module.css";
import LodgeFeatures from "./LodgeFeatures";

const LodgePropsForm = () => {
  const { placePropsStore, dispatchPlacePropsStore, setNextStep } =
    useRegisterPlace();

  const methodsLodge = useForm({
    defaultValues: placePropsStore.lodge,
    resolver: zodResolver(lodgePropsFormSchema),
  });

  const watchLodge = useWatch({
    control: methodsLodge.control,
  }) as ILodge;

  React.useEffect(() => {
    if (!_.isEqual(watchLodge, placePropsStore.lodge)) {
      setNextStep(false);
    }
  }, [watchLodge]);
  renderCounter++;

  console.log(methodsLodge.formState.errors);

  return (
    <div className={`${styles.registerPlace_box}`}>
      <FormProvider {...methodsLodge}>
        <form
          onSubmit={methodsLodge.handleSubmit((lodgeValues) => {
            const flattenFormValues = flattenObject(lodgeValues);
            console.log(flattenFormValues);
            setNextStep(true);
            dispatchPlacePropsStore({
              key: "placePropsStore",
              type: "lodge",
              formValues: lodgeValues,
            });
          })}
        >
          <Paper
            className="core_flexCol"
            sx={{
              justifyContent: "center",
              my: "2rem",
              height: 50,
              background: "#a4539935",
            }}
            square
            elevation={0}
          >
            <Typography sx={{ pl: "2rem" }} variant="h6">
              Base Features
            </Typography>
          </Paper>
          <div className={`${styles.properties_box}`}>
            <div className={`core_flexCol core_wrapperSm`}>
              <BaseFeatures />
            </div>
          </div>
          <Paper
            className="core_flexCol"
            sx={{
              justifyContent: "center",
              my: "2rem",
              height: 50,
              background: "#a4539935",
            }}
            square
            elevation={0}
          >
            <Typography sx={{ pl: "2rem" }} variant="h6">
              GeoLocation
            </Typography>
          </Paper>
          <div className={`${styles.properties_box}`}>
            <div className={`core_flexCol core_wrapperSm`}>
              <Geolocation />
            </div>
          </div>
          <Paper
            className="core_flexCol"
            sx={{
              justifyContent: "center",
              my: "2rem",
              height: 50,
              background: "#a4539935",
            }}
            square
            elevation={0}
          >
            <Typography sx={{ pl: "2rem" }} variant="h6">
              Lodging Features
            </Typography>
          </Paper>
          <div className={`${styles.properties_box}`}>
            <div className={`core_flexCol core_wrapperSm`}>
              <LodgeFeatures />
            </div>
          </div>
          <div className={`${styles.properties_box}`}>
            <div className={`core_flexCol core_wrapperSm`}>
              <List>
                {/* {methodsLodge.formState.errors?.mobile && (
                    <ListItem>
                      <ListItemIcon>
                        <ErrorOutlineIcon />
                      </ListItemIcon>
                      <Typography>
                        {methodsLodge.formState.errors.mobile.message?.toString()}
                      </Typography>
                    </ListItem>
                  )} */}
                {methodsLodge.formState.errors?.email && (
                  <ListItem>
                    <ListItemIcon>
                      <ErrorOutlineIcon />
                    </ListItemIcon>
                    <Typography>
                      {methodsLodge.formState.errors.email.message?.toString()}
                    </Typography>
                  </ListItem>
                )}
              </List>
            </div>
          </div>
          <div className={`${styles.properties_box}`}>
            <div className={`core_flexCol core_wrapperSm`}>
              <Button
                type="submit"
                // color="#F000D0"
                variant="outlined"
                sx={{
                  color: "F000D0",
                  // background: "#a4539935",
                  my: "1rem",
                }}
              >
                Save Lodge Features
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
      <p>{renderCounter}</p>
    </div>
  );
};

export default LodgePropsForm;
