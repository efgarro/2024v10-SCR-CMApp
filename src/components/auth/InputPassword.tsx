import * as React from "react";

import { TextField } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";

import styles from "../../css/auth.module.css";

const InputPassword = () => {
  const {
    formState: { errors },
  } = useFormContext();
  const { field: password } = useController({ name: "password" });

  return (
    <React.Fragment>
      <TextField
        {...password}
        error={errors?.password ? true : false}
        label="Password"
        variant="outlined"
        margin="normal"
        type="password"
      />
    </React.Fragment>
  );
};

export default InputPassword;
