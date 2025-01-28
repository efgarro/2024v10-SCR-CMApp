import * as React from "react";
import { Outlet } from "react-router-dom";
import styles from "../../css/auth.module.css";

const AuthLayout = () => {
  return (
    <React.Fragment>
      <div className={`core_wrapperSm ${styles.authForm_wrapperSm}`}>
        <div className={`core_flexCol ${styles.authForm_case}`}>
          <div className={`core_flexCol ${styles.authForm_box}`}>
            <Outlet />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AuthLayout;
