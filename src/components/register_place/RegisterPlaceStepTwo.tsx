import * as React from "react";

import { useRegisterPlace } from "./RegisterPlaceContext";

import RegisterResta from "./RegisterResta"
import RegisterLodge from "./RegisterLodge";
import WfallFeatures from "./WfallFeatures";

let renderCounter = 0;

const RegisterPlaceStepTwo = () => {
  const { placeStore } = useRegisterPlace();

  const activePlaceType = placeStore.type_loc.place_type;

  const placeTypeChoices = {
    lodge: <RegisterLodge />,
    resta: <RegisterResta />,
    wfall: <WfallFeatures />,
  };

  return (
    <>{placeTypeChoices[activePlaceType as keyof typeof placeTypeChoices]}</>
  );
};

export default RegisterPlaceStepTwo;
