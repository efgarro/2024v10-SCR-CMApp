import * as React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "./components/auth/AuthLayout";
import AuthChoices from "./components/auth/AuthChoices";
import ConfirmSignUpForm from "./components/auth/ConfirmSignUpForm";
import ConfirmResetPasswordForm from "./components/auth/ConfirmResetPasswordForm";

import Dashboard from "./layouts/Dashboard";
import AboutPage from "./components/AboutPage";
import Company from "./components/Company";
import NotFound from "./components/NotFound";
import RegisterPlace from "./components/register_place/RegisterPlaceStepper";

import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "./css/customTheme";
import "./css/styles.css";
import RegisterPlaceStepper from "./components/register_place/RegisterPlaceStepper";

import { RegisterPlaceProvider } from "./components/register_place/RegisterPlaceContext";

const CMApp = () => {
  const isAuthenticated = () => {
    const accessToken = sessionStorage.getItem("accessToken");
    return !!accessToken;
  };
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="auth" element={<AuthChoices />} />
            <Route path="auth/confirm/signup" element={<ConfirmSignUpForm />} />
            <Route
              path="auth/confirm/reset"
              element={<ConfirmResetPasswordForm />}
            />
          </Route>
          <Route
            path="/"
            element={
              isAuthenticated() ? (
                <Dashboard />
              ) : (
                <Navigate replace to="/auth" />
              )
            }
          >
            <Route index element={<RegisterPlaceStepper />} />
            <Route path="register/places" element={<RegisterPlaceStepper />} />

            <Route
              path="register/articles"
              element={<div>register/articles</div>}
            />
            <Route path="manage/places" element={<div>manage/places</div>} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="about" element={<AboutPage />} />
          <Route path="company" element={<Company />} />
          {/* <Route path="/error" element={<ErrorPage />} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default CMApp;
