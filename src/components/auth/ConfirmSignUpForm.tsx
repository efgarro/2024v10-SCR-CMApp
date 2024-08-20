import * as React from "react";

import { authSchema, IConfirmSignUpFormInputs } from "../../types/scrTypes";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import InputEmail from "./InputEmail";
import InputConfirmationCode from "./InputConfirmationCode";
import { confirmSignUp } from "../../services/authServices";

import { Typography, Button } from "@mui/material";
import AccountBox from "@mui/icons-material/AccountBox";
import styles from "../../css/auth.module.css";

const ConfirmSignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const methods = useForm<IConfirmSignUpFormInputs>({
    defaultValues: {
      email: "",
      confirmationCode: "",
    },
    resolver: zodResolver(authSchema),
  });

  const handleConfirmSignUp = async (d: IConfirmSignUpFormInputs) => {
    try {
      await confirmSignUp(d.email, d.confirmationCode);
      alert("Account confirmed successfully!\nSign in on next page.");
      navigate("/auth");
    } catch (error) {
      alert(`Failed to confirm account: ${error}`);
    }
  };

  return (
    <React.Fragment>
      <div className={`layout_flexCol ${styles.authForm_header}`}>
        <AccountBox sx={{ color: "#F000D0" }} />
        {/* <Typography variant="h6" align="center">
          Confirm Sign Up
        </Typography> */}
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleConfirmSignUp)}>
          <div className={`layout_flexCol ${styles.authForm_input}`}>
            <InputEmail />
            <InputConfirmationCode />
            <Button type="submit" variant="contained">
              Confirm Sign Up
            </Button>
          </div>
          <div className={`layout_flexRow ${styles.authForm_pod}`}>
            <Button
              sx={{ textTransform: "none", fontSize: 12 }}
              color="error"
              onClick={() => {
                navigate("/auth");
              }}
            >
              Back to Login
            </Button>
          </div>
        </form>
      </FormProvider>
    </React.Fragment>
  );
};

export default ConfirmSignUp;
