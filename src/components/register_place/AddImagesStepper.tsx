import * as React from "react";
import { useRegisterPlace } from "./RegisterPlaceContext";
import * as _ from "lodash";

import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Stack,
  Button,
  Box,
} from "@mui/material";

let stepperCounter = 0;

import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import AddImagesStepOne from "./AddImagesStepOne";
import AddImagesStepTwo from "./AddImagesStepTwo";
import AddImagesStepThree from "./AddImagesStepThree";
import AddImagesSummary from "./AddImagesSummary";
import { useParams } from "react-router-dom";

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddImagesStepOne />; // Select Place;
    case 1:
      return <AddImagesStepTwo />; // Add & Sort Images;
    case 2:
      return <AddImagesStepThree />; // Review & Submit />;
    default:
      throw new Error("Unknown step");
  }
}

const AddImageStepper = () => {
  const params = useParams();
  const step = params.step !== undefined ? parseInt(params.step) : 0;
  const [activeStep, setActiveStep] = React.useState(step);
  
  const {
    defaultPlacePropsStore,
    dispatchPlacePropsStore,
    isOnNextStep,
    setNextStep,
  } = useRegisterPlace();

setNextStep(true); // remover

  const handleNext = () => {
    console.log(activeStep);
    if (activeStep === 0) {
      setActiveStep(activeStep + 1);
      setNextStep(false);
    } else if (activeStep === 1) {
      setActiveStep(activeStep + 1);
    } else if (activeStep === 2) {
      setTimeout(() => {
        setActiveStep(activeStep + 1);
      }, 2000);
      dispatchPlacePropsStore({
        key: "placeStore",
        type: "reset",
        formValues: defaultPlacePropsStore,
      });
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const steps = [
    "Select Place",
    "Add & Sort Images",
    "Preview & Save to Database",
  ];

  return (
    <div className="core_wrapperMd">
      <Paper
        className="core_flexCol"
        sx={{
          justifyContent: "center",
          mb: "2rem",
          height: 120,
          background: "#a4539935",
        }}
        square
        elevation={0}
      >
        <Typography align="center" /*sx={{ fontWeight: 600 }}*/ variant="h5">
          Register Place
        </Typography>
        <Typography align="center" /*sx={{ fontWeight: 600 }}*/ variant="h6">
          Add Images
        </Typography>
      </Paper>
      <Stepper
        id="mobile-stepper"
        activeStep={activeStep}
        alternativeLabel
        // sx={{ display: { sm: "flex", md: "none" } }}
      >
        {steps.map((label) => (
          <Step
            sx={{
              ":first-of-type": { pl: 0 },
              ":last-child": { pr: 0 },
              "& .MuiStepConnector-root": { top: { xs: 6, sm: 12 } },
            }}
            key={label}
          >
            <StepLabel
              sx={{ ".MuiStepLabel-labelContainer": { maxWidth: "120px" } }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <p>{stepperCounter}</p>
      {activeStep === steps.length ? (
        <AddImagesSummary />
      ) : (
        <React.Fragment>
          {getStepContent(activeStep)}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", sm: "row" },
              justifyContent: activeStep !== 0 ? "space-between" : "flex-end",
              alignItems: "end",
              flexGrow: 1,
              gap: 1,
              pb: { xs: 12, sm: 0 },
              mt: { xs: 2, sm: 0 },
              mb: "60px",
            }}
          >
            {activeStep !== 0 && (
              <Button
                startIcon={<ChevronLeftRounded />}
                onClick={handleBack}
                variant="text"
                sx={{
                  display: { xs: "none", sm: "flex" },
                  mt: "1rem",
                }}
              >
                Previous
              </Button>
            )}
            {activeStep !== 0 && (
              <Button
                startIcon={<ChevronLeftRounded />}
                onClick={handleBack}
                variant="outlined"
                fullWidth
                sx={{
                  display: { xs: "flex", sm: "none" },
                  mt: "1rem",
                }}
              >
                Previous
              </Button>
            )}
            <Button
              variant="contained"
              endIcon={<ChevronRightRounded />}
              onClick={handleNext}
              disabled={!isOnNextStep ? true : false}
              sx={{
                width: { xs: "100%", sm: "fit-content" },
                mt: "1rem",
              }}
            >
              {activeStep === steps.length - 1
                ? "Save to Cloud Database"
                : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </div>
  );
};

export default AddImageStepper;
