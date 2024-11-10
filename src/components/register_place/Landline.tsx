import * as React from "react";
import { useController } from "react-hook-form";
import { isPhoneValid } from "../../utils/phoneNumberUtil";
import { PhoneInput } from "react-international-phone";

import { FormControlLabel, Typography } from "@mui/material";

const Landline = () => {
  const {
    field: landline,
    fieldState: { isDirty: isDirtyLandline },
  } = useController({ name: "landline", shouldUnregister: true });

  const isValid = isPhoneValid(landline.value);

  return (
    <React.Fragment>
      <PhoneInput
        {...landline}
        style={{
          "--react-international-phone-font-size": "15px",
        }}
        required={true}
        placeholder="Landline"
        disableDialCodeAndPrefix={true}
        showDisabledDialCodeAndPrefix={true}
        defaultCountry="cr"
        hideDropdown={true}
      />
      {isValid ? undefined : isDirtyLandline ? (
        <Typography sx={{ color: "red", fontSize: "13px" }}>
          Is Dirty Phone is not valid
        </Typography>
      ) : undefined}
    </React.Fragment>
  );
};

export default Landline;
