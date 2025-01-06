import * as React from "react";
import { IRegisterPlaceContext } from "../../types/scrTypes";
import useReducerPersist from "../../hooks/useReducerPersist";
import placePropsStoreReducer from "../../utils/placePropsStoreReducer";

let RegisterPlaceContext = React.createContext<IRegisterPlaceContext>(null!);

let apCtxt = 0;

const defaultPlacePropsStore = {
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
    price_range: { value: "", label: "" },
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
    price_range: { value: "", label: "" },
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

  const [placePropsStore, dispatchPlacePropsStore] = useReducerPersist(
    "placePropsStore",
    defaultPlacePropsStore,
    placePropsStoreReducer
  );
  // const [addImagesStore, dispatchAddImagesStore] = useReducerPersist(
  //   "addImagesStore",
  //   defaultAddImagesStore,
  //   addImagesStoreReducer
  // );
  const [activePlaceType, setActivePlaceType] = React.useState(
    placePropsStore.type_loc.place_type
  );

  const [isOnNextStep, setNextStep] = React.useState(false);

  let value: IRegisterPlaceContext = {
    defaultPlacePropsStore,
    placePropsStore,
    dispatchPlacePropsStore,
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
