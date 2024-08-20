import * as React from "react";

import { TextField } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";

import styles from "../../css/auth.module.css";

const InputEmail = () => {
  const {
    formState: { errors },
  } = useFormContext();
  const { field: email } = useController({ name: "email" });

  return (
    <React.Fragment>
      <TextField
        {...email}
        className={`${styles.authForm_input_item}`}
        error={errors?.email ? true : false}
        label="Email"
        variant="outlined"
        margin="normal"
      />
      {errors?.email && <p>{errors.email.message?.toString()}</p>}
    </React.Fragment>
  );
};

export default InputEmail;
