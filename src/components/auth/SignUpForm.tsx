import * as React from "react";

import { authSchema, ISignUpFormInputs } from "../../types/scrTypes";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";
import InputConfirmPassword from "./InputConfirmPassword";
import { signUp } from "../../services/authServices";

import { Typography, Button } from "@mui/material";
import AccountBox from "@mui/icons-material/AccountBox";
import styles from "../../css/auth.module.css";

const SignUpForm = () => {
  const navigate = useNavigate();

  const methods = useForm<ISignUpFormInputs>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(authSchema),
  });

  const handleSignUp = async ({
    email,
    password,
    confirmPassword,
  }: ISignUpFormInputs) => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await signUp(email, password);
      navigate("/auth/confirm/signup", { state: { email } });
    } catch (error) {
      alert(`Sign up failed: ${error}`);
    }
  };

  return (
    <React.Fragment>
      <div className={`core_flexCol ${styles.authForm_header}`}>
        <AccountBox sx={{ color: "#F000D0" }} />
        <Typography variant="h6" align="center">
          Sign Up
        </Typography>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSignUp)}>
          <div className={`core_flexCol ${styles.authForm_input}`}>
            <InputEmail />
            <InputPassword />
            <InputConfirmPassword />
            <Button type="submit" variant="contained">
              Sign Up
            </Button>
          </div>
        </form>
      </FormProvider>
    </React.Fragment>
  );
};

export default SignUpForm;
