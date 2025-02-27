// from https://www.geeksforgeeks.org/how-to-flatten-dynamically-nested-objects-in-order-in-typescript/

export const flattenObject = (obj: any): any => {
  let resultObj: any = {};

  for (const i in obj) {
    if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
      // Recursively invoking the funtion
      // until the object gets flatten
      const tempObj = flattenObject(obj[i]);
      for (const j in tempObj) {
        resultObj[i + "_" + j] = tempObj[j];
      }
    } else {
      resultObj[i] = obj[i];
    }
  }
  return resultObj;
};
