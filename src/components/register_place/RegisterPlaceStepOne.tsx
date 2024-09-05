import * as React from "react";

import { useForm, FormProvider, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Paper, Typography } from "@mui/material";

import TypeLoc_Region from "./TypeLoc_Region";
import TypeLoc_Place from "./TypeLoc_Place";
import TypeLoc_Hub from "./TypeLoc_Hub";
import BaseAttributes from "./BaseProperties";

import {
  registerPlaceSchema,
  RegisterPlaceFormInputs,
} from "../../types/scrTypes";

import styles from "../../css/registerPlace.module.css";
import RestaFeatures from "./RestaFeatures";
import LodgeFeatures from "./LodgeFeatures";
import WfallFeatures from "./WfallFeatures";

const RegisterPlaceStepOne = () => {
  const methods = useForm<RegisterPlaceFormInputs>({
    defaultValues: {
      place_type: "lodge",
      region: "guanac",
      hub: "nicoya",
      name: "",
      description: "",
    },
    resolver: zodResolver(registerPlaceSchema),
  });

  const activePlaceType = useWatch({
    control: methods.control,
    name: "place_type",
  });

  const placeTypeChoices = {
    lodge: <LodgeFeatures />,
    resta: <RestaFeatures />,
    wfall: <WfallFeatures />,
  };

  console.log(methods.formState.errors);
  return (
    <div className={`${styles.registerPlace_box}`}>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((d) => {
            console.log(parseFloat(d.latitude));
            console.log(parseFloat(d.longitude));
            console.log(d);
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
              <BaseAttributes />
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
              Place Type Features
            </Typography>
          </Paper>
          <div className={`${styles.properties_box}`}>
            <div className={`layout_flexCol ${styles.properties_wrapper}`}>
              {
                placeTypeChoices[
                  activePlaceType as keyof typeof placeTypeChoices
                ]
              }
            </div>
          </div>
          <input type="submit" />
        </form>
      </FormProvider>
    </div>
  );
};

export default RegisterPlaceStepOne;
