import * as React from "react";
import { IRegisterPlaceContext } from "../../types/scrTypes";
import useReducerPersist from "../../hooks/useReducerPersist";
import placeStoreReducer from "../../utils/placeStoreReducer";

let RegisterPlaceContext = React.createContext<IRegisterPlaceContext>(null!);

let apCtxt = 0;

const defaultPlaceStore = {
  
  type_loc: {
    place_type: "lodge",
    region: "guanac",
    hub: "nicoya",
  },

  lodge: {
    place_id: "",
    image_set_id: "",
    lodge_id: "",
    name: "",
    description: "",
    latitude: "",
    longitude: "",
    mobile_one: "",
    // mobile_two: "",
    // landline: "",
    email: "",
    url: "",
    price_range: "",
  },
  resta: {
    place_id: "",
    image_set_id: "",
    resta_id: "",
    name: "",
    description: "",
    latitude: "",
    longitude: "",
    mobile_one: "",
    // mobile_two: "",
    // landline: "",
    email: "",
    url: "",
    food_genre: "",
    price_range: "",
  },
};

export function RegisterPlaceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    return () => console.log("Component Unmounted");
  }, []);

  const [placeStore, dispatch] = useReducerPersist(
    "placeStore",
    defaultPlaceStore,
    placeStoreReducer
  );
  const [activePlaceType, setActivePlaceType] = React.useState(
    placeStore.type_loc.place_type
  );
  
  const [isOnNextStep, setNextStep] = React.useState(false);
  // const [isOnNextStepTwo, setNextStepTwo] = React.useState(false);
  
  let value: IRegisterPlaceContext = {
    defaultPlaceStore,
    placeStore,
    dispatch,
    activePlaceType,
    setActivePlaceType,
    isOnNextStep,
    setNextStep,
  };

  return (
    <RegisterPlaceContext.Provider value={value}>
      {children}
    </RegisterPlaceContext.Provider>
  );
}

export function useRegisterPlace() {
  return React.useContext(RegisterPlaceContext);
}
