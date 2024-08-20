import * as React from "react";
import { Outlet } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      About Page
      <Outlet />
    </div>
  );
};

export default AboutPage;
