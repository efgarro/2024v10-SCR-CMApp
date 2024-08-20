import * as React from "react";
import styles from "../css/header.module.css";

const Header = () => {
  return (
    <div className="layout_header">
      <div className="layout_wrapper">
        <div className={`${styles.header_box}`}>Header</div>
      </div>
    </div>
  );
};

export default Header;
