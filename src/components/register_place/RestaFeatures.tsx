import * as React from "react";
import { TextField } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";

import styles from "../../css/registerPlace.module.css";

const RestaFeatures = () => {
  const {
    formState: { errors },
  } = useFormContext();
  const { field: url } = useController({
    name: "url",
    defaultValue: "",
    shouldUnregister: true,
  });
  const { field: food_genre } = useController({
    name: "food_genre",
    defaultValue: "",
    shouldUnregister: true,
  });
  // const { field: url } = useController({ name: "url" });

  return (
    <>
      <div className={`layout_flexRow ${styles.properties_LatLon}`}>
        <TextField
          {...url}
          required={true}
          error={errors?.url ? true : false}
          label="Web Page"
          variant="outlined"
          margin="normal"
        />
        {/* {errors?.latitude && <p role="alert">Error!!</p>} */}
        <TextField
          {...food_genre}
          error={errors?.food_genre ? true : false}
          label="Food Genre"
          variant="outlined"
          margin="normal"
        />
      </div>
      {/* {errors?.latitude && <p>{errors.latitude.message?.toString()}</p>} */}
      {/* {errors?.longitude && <p>{errors.longitude.message?.toString()}</p>} */}

      {/* <p>{rr_baseAttr}</p> */}
    </>
  );
};

export default RestaFeatures;
