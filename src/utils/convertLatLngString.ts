const trimAfterPoint = (str: string) => {
  const parts = str.split(".");
  const integerPart = parts[0];
  const decimalPart = parts[1].slice(0, 6); // Take only the first 7 characters

  return integerPart + "." + decimalPart;
};

const convertLatLngString = (latLongString: string) => {
  const latlngArr = latLongString.split(",").map((numStr) => {
    return trimAfterPoint(numStr.trim());
  });
  return latlngArr;
};

export default convertLatLngString;
