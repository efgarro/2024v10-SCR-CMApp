import * as React from "react";
import styles from "../css/footer.module.css";

const Footer = () => {
  return (
    <div className="layout_footer">
      <div className="layout_wrapper">
        <div className={`${styles.footer_box}`}></div>
      </div>
    </div>
  );
};

export default Footer;
