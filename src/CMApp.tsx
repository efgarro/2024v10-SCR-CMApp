import * as React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "./components/auth/AuthLayout";
import AuthChoices from "./components/auth/AuthChoices";
import ConfirmSignUpForm from "./components/auth/ConfirmSignUpForm";
import ConfirmResetPasswordForm from "./components/auth/ConfirmResetPasswordForm";

import { RegisterPlaceProvider } from "./components/register_place/RegisterPlaceContext";
import PlacePropsStepper from "./components/register_place/PlacePropsStepper";

import Dashboard from "./layouts/Dashboard";
import AboutPage from "./components/AboutPage";
import Company from "./components/Company";
import NotFound from "./components/NotFound";
import RegisterPlace from "./components/register_place/RegisterPlace";

import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "./css/customTheme";
import "./css/styles.css";
import AddImagesStepper from "./components/register_place/AddImagesStepper";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const CMApp = () => {
  const isAuthenticated = () => {
    const accessToken = sessionStorage.getItem("accessToken");
    return !!accessToken;
  };
  return (
    <ThemeProvider theme={customTheme}>
      <QueryClientProvider client={queryClient}>
        <RegisterPlaceProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<AuthLayout />}>
                <Route path="auth" element={<AuthChoices />} />
                <Route
                  path="auth/confirm/signup"
                  element={<ConfirmSignUpForm />}
                />
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
                <Route
                  index
                  element={<Navigate to="register/place" replace />}
                />
                <Route path="register/place" element={<RegisterPlace />} />
                <Route
                  path="register/place/images"
                  element={<AddImagesStepper />}
                ></Route>
                <Route
                  path="register/place/props"
                  element={<PlacePropsStepper />}
                ></Route>
                <Route
                  path="register/articles"
                  element={<div>register/articles</div>}
                />
                <Route
                  path="manage/places"
                  element={<div>manage/places</div>}
                />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="about" element={<AboutPage />} />
              <Route path="company" element={<Company />} />
              {/* <Route path="/error" element={<ErrorPage />} /> */}
            </Routes>
          </BrowserRouter>
        </RegisterPlaceProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default CMApp;

{
  /* <Route
  index
  element={
    <RegisterPlaceProvider>
      <RegisterPlace />
    </RegisterPlaceProvider>
  }
/>
<Route path="register/places" element={<RegisterPlace />} /> */
}
