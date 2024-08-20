import * as React from "react";

import { TextField } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";

import styles from "../../css/auth.module.css";

const InputConfirmPassword = () => {
  const {
    formState: { errors },
  } = useFormContext();
  const { field: confirmPassword } = useController({ name: "confirmPassword" });

  return (
    <React.Fragment>
        <TextField
          {...confirmPassword}
          error={errors?.confirmPassword ? true : false}
          label="Confirm Password"
          variant="outlined"
          margin="normal"
          type="password"
        />
    </React.Fragment>
  );
};

export default InputConfirmPassword;
