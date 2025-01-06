import * as React from "react";

import { useRegisterPlace } from "./RegisterPlaceContext";

import LodgePropsForm from "./LodgePropsForm";
import RestaPropsForm from "./RestaPropsForm"
import WfallFeatures from "./WfallFeatures";

let renderCounter = 0;

const PlacePropsStepTwo = () => {
  const { placePropsStore } = useRegisterPlace();

  // const activePlaceType = placePropsStore.type_loc.place_type;

  const placeTypeChoices = {
    lodge: <LodgePropsForm />,
    resta: <RestaPropsForm />,
    wfall: <WfallFeatures />,
  };

  return (
    <>{placeTypeChoices[placePropsStore.type_loc.place_type as keyof typeof placeTypeChoices]}</>
  );
};

export default PlacePropsStepTwo;
