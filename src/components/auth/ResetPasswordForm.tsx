import * as React from "react";

import { authSchema, IForgotPasswordFormInputs } from "../../types/scrTypes";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import InputEmail from "./InputEmail";
import { forgotPassword } from "../../services/authServices";

import { Typography, Button } from "@mui/material";
import AccountBox from "@mui/icons-material/AccountBox";
import styles from "../../css/auth.module.css";

const ResetPasswordForm = () => {
  const navigate = useNavigate();

  const methods = useForm<IForgotPasswordFormInputs>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(authSchema),
  });

  const handleForgotPassword = async ({ email }: IForgotPasswordFormInputs) => {
    try {
      await forgotPassword(email);
      navigate("/auth/confirm/reset", { state: { email } });
    } catch (error) {
      alert(`Request failed: ${error}`);
    }
  };

  return (
    <React.Fragment>
      <div className={`core_flexCol ${styles.authForm_header}`}>
        <AccountBox sx={{ color: "#F000D0" }} />
        <Typography variant="h6" align="center">
          Forgot Password?
        </Typography>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleForgotPassword)}>
          <div className={`core_flexCol ${styles.authForm_input}`}>
            <InputEmail />
            <Button type="submit" variant="contained">
              Reset Password
            </Button>
          </div>
        </form>
      </FormProvider>
    </React.Fragment>
  );
};

export default ResetPasswordForm;
