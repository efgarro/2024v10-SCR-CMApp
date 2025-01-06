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

import BaseFeatures from "./BaseFeatures";

import { restaPropsFormSchema } from "../../types/scrTypes";

import styles from "../../css/registerPlace.module.css";
import RestaFeatures from "./RestaFeatures";

const RestaPropsForm = () => {
  const { placePropsStore, dispatchPlacePropsStore, setNextStep } = useRegisterPlace();

  const methodsResta = useForm({
    defaultValues: placePropsStore.resta,
    resolver: zodResolver(restaPropsFormSchema),
  });

  console.log(methodsResta.formState.errors);

  renderCounter++;

  return (
    <div className={`${styles.registerPlace_box}`}>
      <FormProvider {...methodsResta}>
        <form
          onSubmit={methodsResta.handleSubmit((restaValues) => {
            setNextStep(true);
            dispatchPlacePropsStore({
              key: "placePropsStore",
              type: "resta",
              formValues: restaValues,
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
                {/* {methodsResta.formState.errors?.mobile && (
                    <ListItem>
                      <ListItemIcon>
                        <ErrorOutlineIcon />
                      </ListItemIcon>
                      <Typography>
                        {methodsResta.formState.errors.mobile.message?.toString()}
                      </Typography>
                    </ListItem>
                  )} */}
                {methodsResta.formState.errors?.email && (
                  <ListItem>
                    <ListItemIcon>
                      <ErrorOutlineIcon />
                    </ListItemIcon>
                    <Typography>
                      {methodsResta.formState.errors.email.message?.toString()}
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
                Save Restaurant Features
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

export default RestaPropsForm;
