import * as React from "react";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PlacePropsSummary = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>PlacePropsSummary</div>
      <Button onClick={() => navigate("/register/place/images/1")}>
        Add Images
      </Button>
    </>
  );
};

export default PlacePropsSummary;
