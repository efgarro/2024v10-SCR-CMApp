import { IPlaceStore, IAction, IType_Loc } from "../types/scrTypes";

const formValuesReducer = (placeStore: IPlaceStore, action: IAction) => {
  let newPlaceStore: IPlaceStore;
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
    // case "remove":
    //   console.log("remove");
    //   localStorage.removeItem(action.key as string);
    //   return action.initialValue as T;
    default:
      throw new Error();
  }
};

export default formValuesReducer;
