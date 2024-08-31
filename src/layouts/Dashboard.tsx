import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/auth");
  };

  return (
    <div className="layout_screen layout_flexCol">
      <Header />

      <div className="layout_wrapper layout_flexRow">
        {/* <div className="layout_sidebar"></div> */}
        <Sidebar />
        <div className="layout_contentBox">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
