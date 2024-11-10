import * as React from "react";

import { useController, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";
import styles from "../../css/registerPlace.module.css";

const Url = () => {
  const {
    formState: { errors },
  } = useFormContext();

  const { field: url } = useController({
    name: "url",
    defaultValue: "",
    shouldUnregister: true,
  });

  return (
    <div className={`layout_flexRow ${styles.properties_podX}`}>
      <TextField
        {...url}
        error={errors?.url ? true : false}
        label="Website"
        variant="outlined"
        margin="normal"
      />
    </div>
  );
};

export default Url;
