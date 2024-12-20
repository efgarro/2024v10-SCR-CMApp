import * as React from "react";
let renderCounter = 0;
import { useForm, FormProvider, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as _ from "lodash";

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

import { registerLodgeSchema, ILodge } from "../../types/scrTypes";

import styles from "../../css/registerPlace.module.css";
import LodgeFeatures from "./LodgeFeatures";

const RegisterLodge = () => {
  const { placeStore, dispatch, setNextStepOne } = useRegisterPlace();

  const methodsLodge = useForm({
    defaultValues: placeStore.lodge,
    resolver: zodResolver(registerLodgeSchema),
  });

  const watchLodge = useWatch({
    control: methodsLodge.control,
  }) as ILodge;

  React.useEffect(() => {
    if (!_.isEqual(watchLodge, placeStore.lodge)) {
      setNextStepOne(false);
    }
  }, [watchLodge]);
  renderCounter++;

  console.log(methodsLodge.formState.errors);

  return (
    <div className={`${styles.registerPlace_box}`}>
      <FormProvider {...methodsLodge}>
        <form
          onSubmit={methodsLodge.handleSubmit((d) => {
            console.log(d);
            setNextStepOne(true);
            dispatch({
              key: "placeStore",
              type: "lodge",
              formValues: d,
            });
          })}
        >
          <Paper
            className="layout_flexCol"
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
            <div className={`layout_flexCol ${styles.properties_wrapper}`}>
              <BaseFeatures />
            </div>
          </div>
          <Paper
            className="layout_flexCol"
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
            <div className={`layout_flexCol ${styles.properties_wrapper}`}>
              <LodgeFeatures />
            </div>
          </div>
          <div className={`${styles.properties_box}`}>
            <div className={`layout_flexCol ${styles.properties_wrapper}`}>
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
            <div className={`layout_flexCol ${styles.properties_wrapper}`}>
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

export default RegisterLodge;
