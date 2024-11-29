import * as z from "zod";
import { isPhoneValid } from "../utils/phoneNumberUtil";
// import validator from "validator";
import isURL from "validator/lib/isURL";

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

export const registerPlaceSchema = z.object({
  place_type: z.string(),
  region: z.string(),
  hub: z.string().min(6, { message: "Error !!!" }),
  name: z.string().min(5, { message: "Please check the name" }),
  description: z
    .string()
    .min(20, { message: "Please extend your description" }),
  latitude: z
    .string()
    .regex(
      /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/,
      {
        message:
          "Invalid LATITUDE format. Please review that decimals are 6 max and that no alpha characters are included",
      }
    ),
  longitude: z
    .string()
    .regex(
      /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/,
      {
        message:
          "Invalid LONGITUDE format. Please review that decimals are 6 max and that no alpha characters are included",
      }
    ),
  mobile_one: z
    .string()
    .refine((val) => isPhoneValid(val), {
      message: "Phone is invalid",
    })
    .optional(),
  landline: z.string().optional(),
  email: z.string().email().optional(),
  url: z
    .string()
    .refine((val) => isURL(val))
    .optional(),
  food_genre: z.string().optional(),
  price_range: z.object({ value: z.string(), label: z.string() }),
});

const basePropsSchema = {
  name: z.string().min(5, { message: "Please check the name" }),
  description: z
    .string()
    .min(20, { message: "Please extend your description" }),
  latitude: z
    .string()
    .regex(
      /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/,
      {
        message:
          "Invalid LATITUDE format. Please review that decimals are 6 max and that no alpha characters are included",
      }
    ),
  longitude: z
    .string()
    .regex(
      /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/,
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

export const registerLodgeSchema = z.object({
  ...basePropsSchema,
  ...phoneNumbersSchema,
  ...webContactsSchema,
  price_range: z.object({ value: z.string(), label: z.string() }),
});

export const registerRestaSchema = z.object({
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
  name: string;
  description: string;
  latitude: string;
  longitude: string;
  landline: string;
}

interface IPhonesNumbers {
  landline: string;
  mobile_one: string;
  mobile_two: string;
}

interface IWebContacts {
  email: string;
  url: string;
}

interface IPricing {
  price_range: string;
}

interface ILodge
  extends IBaseProperties,
    IPhonesNumbers,
    IWebContacts,
    IPricing {}

interface IResta
  extends IBaseProperties,
    IPhonesNumbers,
    IWebContacts,
    IPricing {
  food_genre: string;
}

export interface IPlaceStore {
  type_loc: IType_Loc;
  lodge: ILodge;
  resta: IResta;
}

export type IAction = {
  type: string;
  formValues: any;
  key?: string;
  // initialValue?: T;
};

export interface IRegisterPlaceContext {
  defaultPlaceStore: IPlaceStore;
  placeStore: IPlaceStore;
  dispatch: React.Dispatch<IAction>;
  activePlaceType: string;
  setActivePlaceType: React.Dispatch<React.SetStateAction<string>>;
  isOnNextStepOne: boolean;
  setNextStepOne: React.Dispatch<React.SetStateAction<boolean>>;
}

// export interface IBaseAttrInputs {
// }
