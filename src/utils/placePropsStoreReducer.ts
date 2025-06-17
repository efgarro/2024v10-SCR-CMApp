import { IPlacePropsStore, IPlacePropsAction, IType_Loc } from "../types/scrTypes";

const placePropsStoreReducer = (placeStore: IPlacePropsStore, action: IPlacePropsAction) => {
  let newPlaceStore: IPlacePropsStore;
  switch (action.type) {
    case "type_loc":
      newPlaceStore = {
        ...placeStore,
        type_loc: { ...action.formValues },
      };
      localStorage.setItem(action.key as string, JSON.stringify(newPlaceStore));
      return newPlaceStore;
    case "lodge":
      newPlaceStore = {
        ...placeStore,
        lodge: { ...action.formValues },
      };
      localStorage.setItem(action.key as string, JSON.stringify(newPlaceStore));
      return newPlaceStore;
    case "resta":
      newPlaceStore = {
        ...placeStore,
        resta: { ...action.formValues },
      };
      localStorage.setItem(action.key as string, JSON.stringify(newPlaceStore));
      return newPlaceStore;
    case "reset":
      newPlaceStore = {
        ...action.formValues,
      };
      localStorage.setItem(action.key as string, JSON.stringify(newPlaceStore));
      return newPlaceStore;

    default:
      throw new Error();
  }
};

export default placePropsStoreReducer;
