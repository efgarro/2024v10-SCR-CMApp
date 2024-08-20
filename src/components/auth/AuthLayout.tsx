import * as React from "react";
import { Outlet } from "react-router-dom";
import styles from "../../css/auth.module.css";

const AuthLayout = () => {
  return (
    <React.Fragment>
      <div className={`${styles.authForm_wrapper}`}>
        <div className={`layout_flexCol ${styles.authForm_case}`}>
          <div className={`layout_flexCol ${styles.authForm_box}`}>
            <Outlet />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AuthLayout;
