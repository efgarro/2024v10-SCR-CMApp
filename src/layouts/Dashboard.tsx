import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import RegisterPlace from "../components/register/RegisterPlace";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/auth");
  };

  return (
    <div className="layout_screen">
      <Header />
      <button onClick={handleLogout}>Logout</button>
      <div className="layout_wrapper layout_flexRow">
        <div className="layout_sidebar"></div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
