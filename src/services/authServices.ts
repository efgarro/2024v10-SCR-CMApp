// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import {
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  SignUpCommand,
  ConfirmSignUpCommand,
  ForgotPasswordCommand,
  ConfirmForgotPasswordCommand,
  AuthFlowType,
} from "@aws-sdk/client-cognito-identity-provider";
// import config from "../config.json";

// import 'dotenv/config'

export const cognitoClient = new CognitoIdentityProviderClient({
  region: process.env.REGION,
});

export const signIn = async (username: string, password: string) => {
  console.log(process.env.CLIENT_ID)
  const params = {
    AuthFlow: "USER_PASSWORD_AUTH" as AuthFlowType,
    ClientId: process.env.CLIENT_ID as string,
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password,
    },
  };
  try {
    const command = new InitiateAuthCommand(params);
    const { AuthenticationResult } = await cognitoClient.send(command);
    if (AuthenticationResult) {
      sessionStorage.setItem("idToken", AuthenticationResult.IdToken || "");
      sessionStorage.setItem(
        "accessToken",
        AuthenticationResult.AccessToken || ""
      );
      sessionStorage.setItem(
        "refreshToken",
        AuthenticationResult.RefreshToken || ""
      );
      return AuthenticationResult;
    }
    return false;
  } catch (error) {
    console.error("Error signing in: ", error);
    throw error;
  }
};

export const signUp = async (email: string, password: string) => {
  const params = {
    ClientId: process.env.CLIENT_ID,
    Username: email,
    Password: password,
    UserAttributes: [
      {
        Name: "email",
        Value: email,
      },
    ],
  };
  try {
    const command = new SignUpCommand(params);
    const response = await cognitoClient.send(command);
    console.log("Sign up success: ", response);
    return response;
  } catch (error) {
    console.error("Error signing up: ", error);
    throw error;
  }
};

export const confirmSignUp = async (username: string, code: string) => {
  const params = {
    ClientId: process.env.CLIENT_ID,
    Username: username,
    ConfirmationCode: code,
  };
  try {
    const command = new ConfirmSignUpCommand(params);
    await cognitoClient.send(command);
    console.log("User confirmed successfully");
    return true;
  } catch (error) {
    console.error("Error confirming sign up: ", error);
    throw error;
  }
};

export const forgotPassword = async (email: string) => {
  const params = {
    ClientId: process.env.CLIENT_ID,
    Username: email,
  };
  const command = new ForgotPasswordCommand(params);
  const response = await cognitoClient.send(command);
};

export const confirmForgotPassword = async (
  email: string,
  password: string,
  code: string
) => {
  const params = {
    ClientId: process.env.CLIENT_ID,
    Username: email,
    Password: password,
    ConfirmationCode: code,
  };
  const command = new ConfirmForgotPasswordCommand(params);
  const response = await cognitoClient.send(command);
};
