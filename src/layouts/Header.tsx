import * as React from "react";
import styles from "../css/header.module.css";

const Header = () => {
  return (
    <div className="core_header">
      <div className="core_wrapper">
        <div className={`${styles.header_box}`}></div>
      </div>
    </div>
  );
};

export default Header;
