import * as React from "react";
import { useController } from "react-hook-form";
import { isPhoneValid } from "../../utils/phoneNumberUtil";
import { PhoneInput } from "react-international-phone";

import { FormControlLabel, Typography } from "@mui/material";

const MobileOne = () => {
  const {
    field: mobile_one,
    fieldState: { isDirty: isDirtyMobileOne },
  } = useController({
    name: "mobile_one",
    defaultValue: "",
    shouldUnregister: true,
  });

  const isValid = isPhoneValid(mobile_one.value);

  return (
    <React.Fragment>
      <PhoneInput
        {...mobile_one}
        style={{
          "--react-international-phone-font-size": "15px",
        }}
        required={true}
        placeholder="Mobile #1 & WhatsApp"
        disableDialCodeAndPrefix={true}
        showDisabledDialCodeAndPrefix={true}
        defaultCountry="cr"
        hideDropdown={true}
      />
      {isValid ? undefined : isDirtyMobileOne ? (
        <Typography sx={{ color: "red", fontSize: "13px" }}>
          Is Dirty Phone is not valid
        </Typography>
      ) : undefined}
    </React.Fragment>
  );
};

export default MobileOne;
