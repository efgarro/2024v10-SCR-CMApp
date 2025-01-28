import * as React from "react";

import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ResetPasswordForm from "./ResetPasswordForm";

import Button from "@mui/material/Button";
import styles from "../../css/auth.module.css";

const AuthChoices = () => {
  const [activeChoice, setActiveChoice] = React.useState(1);

  const authChoices = {
    1: <LoginForm />,
    2: <SignUpForm />,
    3: <ResetPasswordForm />,
  };

  return (
    <React.Fragment>
      {authChoices[activeChoice as keyof typeof authChoices]}
      <div className={`core_flexRow ${styles.authForm_pod}`}>
        {activeChoice !== 1 && (
          <Button
            sx={{ textTransform: "none", fontSize: 12 }}
            onClick={() => {
              setActiveChoice(1);
            }}
          >
            Back to Login
          </Button>
        )}

        {activeChoice === 1 && (
          <Button
            sx={{ textTransform: "none", fontSize: 12 }}
            onClick={() => {
              setActiveChoice(2);
            }}
          >
            Sign Up
          </Button>
        )}
        {activeChoice === 1 && (
          <Button
            sx={{ textTransform: "none", fontSize: 12 }}
            color="error"
            onClick={() => {
              setActiveChoice(3);
            }}
          >
            Forgot Password?
          </Button>
        )}
      </div>
    </React.Fragment>
  );
};

export default AuthChoices;
