import * as React from "react";

import { Paper, Typography, Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PlaceIcon from "@mui/icons-material/Place";
import PlacePropsStepper from "./PlacePropsStepper";
import { RegisterPlaceProvider } from "./RegisterPlaceContext";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

import styles from "../../css/registerPlace.module.css";

const RegisterPlace = () => {
  const navigateTo = useNavigate();

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
      </Paper>
      <div className={`core_flexRow ${styles.properties_podX}`}>
        <Button
          variant="contained"
          size="large"
          startIcon={<PlaceIcon />}
          sx={{ height: 120, background: "#80B8BE" }}
          onClick={() => navigateTo("/register/place/props")}
        >
          Properties and Features
        </Button>
        <Button
          variant="contained"
          size="large"
          startIcon={<CloudUploadIcon />}
          onClick={() => navigateTo("/register/place/images")}
        >
          Add Images
        </Button>
      </div>
    </div>
  );
};

export default RegisterPlace;
