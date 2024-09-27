import * as React from "react";
import { TextField } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import styles from "../../css/registerPlace.module.css";

const LodgeFeatures = () => {
  const {
    formState: { errors },
  } = useFormContext();
  const {
    field: mobile,
    fieldState: { isDirty: isDirtyMobile },
  } = useController({
    name: "mobile",
    defaultValue: "",
    shouldUnregister: true,
  });
  const {
    field: landline,
    fieldState: { isDirty: isDirtyLandline },
  } = useController({
    name: "landline",
    defaultValue: "",
    shouldUnregister: true,
  });
  const { field: email } = useController({
    name: "email",
    defaultValue: "",
    shouldUnregister: true,
  });
  return (
    <>
      <div className={`layout_flexRow ${styles.properties_podX}`}>
        <PhoneInput
          {...mobile}
          international
          countryCallingCodeEditable={false}
          defaultCountry="CR"
          // error={
          //   isPossiblePhoneNumber(mobile.value)
          //     ? undefined
          //     : isDirtyMobile
          //     ? "Invalid phone number"
          //     : undefined
          // }
        />
        {isPossiblePhoneNumber(mobile.value)
          ? undefined
          : isDirtyMobile
          ? "Invalid phone number"
          : undefined}
        <PhoneInput
          {...landline}
          international
          countryCallingCodeEditable={false}
          defaultCountry="CR"
        />
        {isPossiblePhoneNumber(mobile.value)
          ? undefined
          : isDirtyLandline
          ? "Invalid phone number"
          : undefined}
      </div>
      <div className={`layout_flexRow ${styles.properties_podX}`}>
        <TextField
          {...email}
          error={errors?.email ? true : false}
          label="Email"
          variant="outlined"
          margin="normal"
        />
      </div>
    </>
  );
};

export default LodgeFeatures;
