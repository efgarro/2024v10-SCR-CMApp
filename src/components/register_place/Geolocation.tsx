import * as React from "react";

import { TextField, Radio, Button, IconButton } from "@mui/material";

import { useController, useFormContext } from "react-hook-form";
import convertLatLngString from "../../utils/convertLatLngString";
import { trimAfterPoint } from "../../utils/trimAfterPoint";

import UpdateIcon from "@mui/icons-material/Update";

import styles from "../../css/registerPlace.module.css";

const Geolocation = () => {
  const [latLng, setLatLng] = React.useState("");
  const {
    setValue,
    formState: { errors },
  } = useFormContext();
  const { field: latitude } = useController({ name: "latitude" });
  const { field: longitude } = useController({ name: "longitude" });
  const [selectedValue, setSelectedValue] = React.useState("c");

  const handleSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };


  const onSuccess = (position: GeolocationPosition) => {
    console.log(trimAfterPoint(position.coords.latitude.toString()));
    console.log(position.coords.longitude);
    setValue("latitude", trimAfterPoint(position.coords.latitude.toString()));
    setValue("longitude", trimAfterPoint(position.coords.longitude.toString()));
    setSelectedValue("c");
  };
  
  const onError = (error: any) => {
    console.log(error);
  };

  const handleGeoLoc = () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  };

  return (
    <>
      <div className={`core_flexRow ${styles.geoloc_podX}`}>
        <Radio
          className={`${styles.geoloc_podX_radio}`}
          checked={selectedValue === "a"}
          onChange={handleSelection}
          value="a"
        />
        <Button
          onClick={handleGeoLoc}
          disabled={selectedValue !== "a"}
          variant="contained"
        >
          Get Current Position
        </Button>
      </div>
      <div className={`core_flexRow ${styles.geoloc_podX}`}>
        <Radio
          className={`${styles.geoloc_podX_radio}`}
          checked={selectedValue === "b"}
          onChange={handleSelection}
          value="b"
        />
        {/* </div> */}
        <TextField
          disabled={selectedValue !== "b"}
          label="Copy <latitude,longitude> from Google Maps"
          variant="outlined"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setLatLng(event.target.value);
          }}
          margin="normal"
          sx={{ my: "auto" }}
        />
        <div className={`${styles.geoloc_podX_updateIcon}`}>
          <IconButton
            onClick={() => {
              const [lat, lng] = convertLatLngString(latLng);
              setValue("latitude", lat);
              setValue("longitude", lng);
              setSelectedValue("c");
            }}
            disabled={selectedValue !== "b"}
          >
            <UpdateIcon />
          </IconButton>
        </div>
      </div>
      <div className={`core_flexRow ${styles.geoloc_podX}`}>
        <Radio
          className={`${styles.geoloc_podX_radio}`}
          checked={selectedValue === "c"}
          onChange={handleSelection}
          value="c"
        />
        <TextField
          {...latitude}
          disabled={selectedValue !== "c"}
          label="Latitude"
          variant="outlined"
          margin="normal"
          sx={{ my: "auto" }}
        />
        <TextField
          {...longitude}
          disabled={selectedValue !== "c"}
          label="Longitude"
          variant="outlined"
          margin="normal"
          sx={{ my: "auto" }}
        />
      </div>
    </>
  );
};

export default Geolocation;
