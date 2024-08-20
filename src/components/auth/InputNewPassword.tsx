import * as React from "react";

import { TextField } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";

import styles from "../../css/auth.module.css";

const InputNewPassword = () => {
  const {
    formState: { errors },
  } = useFormContext();
  const { field: newPassword } = useController({ name: "newPassword" });

  return (
    <React.Fragment>
      <TextField
        {...newPassword}
        error={errors?.newPassword ? true : false}
        label="New Password"
        variant="outlined"
        margin="normal"
        type="password"
      />
    </React.Fragment>
  );
};

export default InputNewPassword;
