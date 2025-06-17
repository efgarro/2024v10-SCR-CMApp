import { trimAfterPoint } from "./trimAfterPoint";

const convertLatLngString = (latLongString: string) => {
  const latlngArr = latLongString.split(",").map((numStr) => {
    return trimAfterPoint(numStr.trim());
  });
  return latlngArr;
};

export default convertLatLngString;
