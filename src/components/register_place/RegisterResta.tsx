import * as React from "react";
let renderCounter = 0;
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

import BaseProperties from "./BaseProperties";

import { registerLodgeSchema } from "../../types/scrTypes";

import styles from "../../css/registerPlace.module.css";
import RestaFeatures from "./RestaFeatures";

const RegisterResta = () => {
  const { placeStore, dispatch } = useRegisterPlace();

  const methodsLodge = useForm({
    defaultValues: placeStore.lodge,
    resolver: zodResolver(registerLodgeSchema),
  });

  renderCounter++;

  return (
    <div className={`${styles.registerPlace_box}`}>
      <FormProvider {...methodsLodge}>
        <form
          onSubmit={methodsLodge.handleSubmit((d) => {
            console.log(parseFloat(d.latitude));
            console.log(parseFloat(d.longitude));
            console.log(d);
            dispatch({
              type: "resta",
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
              Base Properties
            </Typography>
          </Paper>
          <div className={`${styles.properties_box}`}>
            <div className={`layout_flexCol ${styles.properties_wrapper}`}>
              <BaseProperties />
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
              Restaurant Features
            </Typography>
          </Paper>
          <div className={`${styles.properties_box}`}>
            <div className={`layout_flexCol ${styles.properties_wrapper}`}>
              <RestaFeatures />
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
                Submit Form
              </Button>
            </div>
          </div>
          {/* <input type="submit" /> */}
        </form>
      </FormProvider>
      <p>{renderCounter}</p>
    </div>
  );
};

export default RegisterResta;
