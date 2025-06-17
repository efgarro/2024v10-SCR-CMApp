export const trimAfterPoint = (str: string) => {
  const parts = str.split(".");
  const integerPart = parts[0];
  const decimalPart = parts[1].slice(0, 7); // Take only the first 7 characters

  return integerPart + "." + decimalPart;
};