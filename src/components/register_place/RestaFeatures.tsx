import * as React from "react";
import { Typography, TextField, FormControlLabel, Switch } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";

import useToggle from "../../hooks/useToggle";
import MobileOne from "./MobileOne";
import MobileTwo from "./MobileTwo";
import Landline from "./Landline";

import styles from "../../css/registerPlace.module.css";
import Url from "./Url";
import Email from "./Email";
import PriceRange from "./PriceRange";

const RestaFeatures = () => {
  const {
    formState: { errors },
  } = useFormContext();

  const { field: email } = useController({
    name: "email",
    defaultValue: "",
    shouldUnregister: true,
  });

  const [isOnMobileOne, toggleMobileOne] = useToggle(true);
  const [isOnMobileTwo, toggleMobileTwo] = useToggle(false);
  const [isOnLandline, toggleLandline] = useToggle(true);

  return (
    <React.Fragment>
      <div className={`layout_flexRow ${styles.phoneAttr}`}>
        <div className="phoneAttr_toogle">
          <FormControlLabel
            control={
              <Switch defaultChecked onChange={() => toggleMobileOne()} />
            }
            label={
              <Typography sx={{ fontSize: 14 }}>Mobile/WhatsApp #1</Typography>
            }
          />
        </div>
        {isOnMobileOne ? (
          <div className={`${styles.phoneAttr_case}`}>
            <MobileOne />
          </div>
        ) : undefined}
      </div>
      <div className={`layout_flexRow ${styles.phoneAttr}`}>
        <div className="phoneAttr_toogle">
          <FormControlLabel
            control={
              <Switch defaultChecked onChange={() => toggleLandline()} />
            }
            label={<Typography sx={{ fontSize: 14 }}>Landline</Typography>}
          />
        </div>
        {isOnLandline ? (
          <div className={`${styles.phoneAttr_case}`}>
            <Landline />
          </div>
        ) : undefined}
      </div>
      <div className={`layout_flexRow ${styles.phoneAttr}`}>
        <div className="phoneAttr_toogle">
          <FormControlLabel
            control={<Switch onChange={() => toggleMobileTwo()} />}
            label={
              <Typography sx={{ fontSize: 14 }}>Mobile/WhatsApp #2</Typography>
            }
          />
        </div>
        {isOnMobileTwo ? (
          <div className={`${styles.phoneAttr_case}`}>
            <MobileTwo />
          </div>
        ) : undefined}
      </div>
      <Email />
      <Url />
      <PriceRange />
    </React.Fragment>
  );
};

export default RestaFeatures;
