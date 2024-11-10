import * as React from "react";

import { useController, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";
import styles from "../../css/registerPlace.module.css";

const Email = () => {
  const {
    formState: { errors },
  } = useFormContext();

  const { field: email } = useController({
    name: "email",
    defaultValue: "",
    shouldUnregister: true,
  });

  return (
    <div className={`layout_flexRow ${styles.properties_podX}`}>
      <TextField
        {...email}
        error={errors?.url ? true : false}
        label="Email"
        variant="outlined"
        margin="normal"
      />
    </div>
  );
};

export default Email;
