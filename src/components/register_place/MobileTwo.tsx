import * as React from "react";
import { useController } from "react-hook-form";

import { isPhoneValid } from "../../utils/phoneNumberUtil";
import { PhoneInput } from "react-international-phone";

import { FormControlLabel, Typography } from "@mui/material";

const MobileTwo = () => {
  const {
    field: mobile_two,
    fieldState: { isDirty: isDirtyMobileTwo },
  } = useController({ name: "mobile_two", shouldUnregister: true });

  const isValid = isPhoneValid(mobile_two.value);

  return (
    <React.Fragment>
      <PhoneInput
        {...mobile_two}
        style={{
          "--react-international-phone-font-size": "15px",
        }}
        required={true}
        placeholder="Mobile #2 & WhatsApp"
        disableDialCodeAndPrefix={true}
        showDisabledDialCodeAndPrefix={true}
        defaultCountry="cr"
        hideDropdown={true}
      />
      {isValid ? undefined : isDirtyMobileTwo ? (
        <Typography sx={{ color: "red", fontSize: "13px" }}>
          Is Dirty Phone is not valid
        </Typography>
      ) : undefined}
    </React.Fragment>
  );
};

export default MobileTwo;
