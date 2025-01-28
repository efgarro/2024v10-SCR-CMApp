import * as React from "react";

import { authSchema, ILoginFormInputs } from "../../types/scrTypes";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";
import { signIn } from "../../services/authServices";

import { Typography, Button } from "@mui/material";
import AccountBox from "@mui/icons-material/AccountBox";
import styles from "../../css/auth.module.css";

const LoginForm = () => {
  const methods = useForm<ILoginFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(authSchema),
  });

  const handleSignIn = async (d: ILoginFormInputs) => {
    try {
      const session = await signIn(d.email, d.password);
      console.log("Sign in successful", session);
      if (session && typeof session.AccessToken !== "undefined") {
        sessionStorage.setItem("accessToken", session.AccessToken);
        if (sessionStorage.getItem("accessToken")) {
          window.location.href = "/";
        } else {
          console.error("Session token was not set properly.");
        }
      } else {
        console.error("SignIn session or AccessToken is undefined.");
      }
    } catch (error) {
      alert(`Sign in failed: ${error}`);
    }
  };

  return (
    <React.Fragment>
      <div className={`core_flexCol ${styles.authForm_header}`}>
        <AccountBox sx={{ color: "#F000D0" }} />
        <Typography variant="h6" align="center">
          Login
        </Typography>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSignIn)}>
          <div className={`core_flexCol ${styles.authForm_input}`}>
            <InputEmail />
            <InputPassword />
            <Button type="submit" variant="contained">
              Login
            </Button>
          </div>
        </form>
      </FormProvider>
    </React.Fragment>
  );
};

export default LoginForm;
