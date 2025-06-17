import * as z from "zod";
import { isPhoneValid } from "../utils/phoneNumberUtil";
// import validator from "validator";
import isURL from "validator/lib/isURL";
import { UUIDVersion } from "validator";
import { UUIDTypes } from "uuid";

export const authSchema = z.object({
  email: z.string().email(),
  password: z.string().optional(),
  newPassword: z.string().optional(),
  confirmPassword: z.string().optional(),
  confirmationCode: z.string().optional(),
});

export interface ILoginFormInputs {
  email: string;
  password: string;
}
export interface ISignUpFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}
export interface IForgotPasswordFormInputs {
  email: string;
}
export interface IConfirmSignUpFormInputs {
  email: string;
  confirmationCode: string;
}
export interface IConfirmResetPasswordFormInputs {
  email: string;
  newPassword: string;
  confirmationCode: string;
}

// export const registerPlaceSchema = z.object({
//   place_type: z.string(),
//   region: z.string(),
//   hub: z.string().min(6, { message: "Error !!!" }),
//   name: z.string().min(5, { message: "Please check the name" }),
//   description: z
//     .string()
//     .min(20, { message: "Please extend your description" }),
//   latitude: z
//     .string()
//     .regex(
//       /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/,
//       {
//         message:
//           "Invalid LATITUDE format. Please review that decimals are 6 max and that no alpha characters are included",
//       }
//     ),
//   longitude: z
//     .string()
//     .regex(
//       /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/,
//       {
//         message:
//           "Invalid LONGITUDE format. Please review that decimals are 6 max and that no alpha characters are included",
//       }
//     ),
//   mobile_one: z
//     .string()
//     .refine((val) => isPhoneValid(val), {
//       message: "Phone is invalid",
//     })
//     .optional(),
//   landline: z.string().optional(),
//   email: z.string().email().optional(),
//   url: z
//     .string()
//     .refine((val) => isURL(val))
//     .optional(),
//   food_genre: z.string().optional(),
//   price_range: z.object({ value: z.string(), label: z.string() }),
// });

const basePropsSchema = {
  name: z.string().min(5, { message: "Please check the name" }),
  description: z
    .string()
    .min(20, { message: "Please extend your description" }),
  latitude: z
    .string()
    .regex(
      /^(\+|-)?(?:90(?:(?:\.0{1,7})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,7})?))$/,
      {
        message:
          "Invalid LATITUDE format. Please review that decimals are 6 max and that no alpha characters are included",
      }
    ),
  longitude: z
    .string()
    .regex(
      /^(\+|-)?(?:180(?:(?:\.0{1,7})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,7})?))$/,
      {
        message:
          "Invalid LONGITUDE format. Please review that decimals are 6 max and that no alpha characters are included",
      }
    ),
};

const phoneNumbersSchema = {
  mobile_one: z
    .string()
    .refine((val) => isPhoneValid(val), {
      message: "Phone is invalid",
    })
    .optional(),
  mobile_two: z
    .string()
    .refine((val) => isPhoneValid(val), {
      message: "Phone is invalid",
    })
    .optional(),
  landline: z.string().optional(),
};

const webContactsSchema = {
  email: z.string().email().optional(),
  url: z
    .string()
    .refine((val) => isURL(val))
    .optional(),
};

export const lodgePropsFormSchema = z.object({
  ...basePropsSchema,
  ...phoneNumbersSchema,
  ...webContactsSchema,
  price_range: z.object({ value: z.string(), label: z.string() }),
});

export const restaPropsFormSchema = z.object({
  ...basePropsSchema,
  ...phoneNumbersSchema,
  ...webContactsSchema,
  price_range: z.object({ value: z.string(), label: z.string() }),
  food_genre: z.string().optional(),
});

export const typeLocSchema = z.object({
  place_type: z.string(),
  region: z.string(),
  hub: z.string().min(6, { message: "Error !!!" }),
});

export interface IType_Loc {
  place_type: string;
  region: string;
  hub: string;
}

interface IBaseProperties {
  // place_id: string;
  // image_set_id: string;
  name: string;
  description: string;
  latitude: string;
  longitude: string;
}

interface IPhonesNumbers {
  mobile_one: string;
  mobile_two?: string;
  landline?: string;
}

interface IWebContacts {
  email: string;
  url: string;
}

export interface IPriceSelect {
  value: string;
  label: string;
}

interface IPricing {
  price_range: IPriceSelect;
}

export interface ILodge
  extends IBaseProperties,
    IPhonesNumbers,
    IWebContacts,
    IPricing {
  // lodge_id: string;
}

export interface IResta
  extends IBaseProperties,
    IPhonesNumbers,
    IWebContacts,
    IPricing {
  // resta_id: string;
  food_genre: string;
}

export interface IPlacePropsStore {
  type_loc: IType_Loc;
  lodge: ILodge;
  resta: IResta;
}

export interface IPlacePropsAction {
  type: string;
  formValues: any;
  key?: string;
}

export interface IPlaceToEditStore {
  place_id: string;
  image_set_id: string;
  hub: string;
  place_type: string;
}

export interface IPlaceToEditAction {
  type: string;
  placeToEditValues: IPlaceToEditStore;
}

export interface ILodgePlaceSummary extends IType_Loc, ILodge {
  place_id: string;
  // price_rangeValue: string;
}

export interface IRegisterPlaceContext {
  defaultPlacePropsStore: IPlacePropsStore;
  placePropsStore: IPlacePropsStore;
  dispatchPlacePropsStore: React.Dispatch<IPlacePropsAction>;
  activePlaceType: string;
  setActivePlaceType: React.Dispatch<React.SetStateAction<string>>;
  isOnNextStep: boolean;
  setNextStep: React.Dispatch<React.SetStateAction<boolean>>;
}

// export interface IBaseAttrInputs {
// }
interface GeolocationCoordinates {
  latitude: number | null;
  longitude: number | null;
  altitude: number | null;
  accuracy: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  speed: number | null;
}

export interface GeolocationPosition {
  coords: GeolocationCoordinates;
  timestamp: number | null;
}

export interface IGeoState extends GeolocationPosition {
  loading: boolean;
  error: GeolocationPositionError | null;
}

export interface GeolocationPositionError {
  code: number;
  message: string;
  PERMISSION_DENIED: number;
  POSITION_UNAVAILABLE: number;
  TIMEOUT: number;
}

export interface IGeolocationPositionOptions {
  enableHighAccuracy: boolean;
  timeout: number;
  maximumAge: number;
}
