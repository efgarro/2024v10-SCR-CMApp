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
    <div className="core_screen core_flexCol">
      <Header />

      <div className="core_wrapper core_flexRow">
        {/* <div className="core_sidebar"></div> */}
        <Sidebar />
        <div className="core_contentBox">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
