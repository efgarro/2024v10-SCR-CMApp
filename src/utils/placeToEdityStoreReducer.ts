import { IPlaceToEditAction, IPlaceToEditStore } from "../types/scrTypes";

const placeToEditStoreReducer = (
  placeToEditsStore: IPlaceToEditStore,
  action: IPlaceToEditAction
) => {
  let newPlaceToEditStore: IPlaceToEditStore;

  newPlaceToEditStore = {
    ...action.placeToEditValues,
  };

  return newPlaceToEditStore;
};

export default placeToEditStoreReducer;
