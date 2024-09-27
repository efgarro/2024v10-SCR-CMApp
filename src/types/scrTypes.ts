import * as z from "zod";

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
  // .refine(
  //   (val) => {
  //     const decimals = val.substring(val.indexOf("."));
  //     return decimals.length <= 7 ? true : false;
  //   },
  //   {
  //     message: "Can't have more than 6 decimals",
  //   }
  // ),
  longitude: z
    .string()
    .regex(
      /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/,
      {
        message:
          "Invalid LONGITUDE format. Please review that decimals are 6 max and that no alpha characters are included",
      }
    ),
  mobile: z.string().length(12).optional(),
  landline: z.string().optional(),
  email: z.string().email().optional(),
  url: z.string().url().optional(),
  food_genre: z.string().optional(),
  price_range: z.string().optional(),
});

export interface RegisterPlaceFormInputs {
  place_type: string;
  region: string;
  hub: string;
  name: string;
  description: string;
  latitude: string;
  longitude: string;
  landline?: string;
  mobile?: string;
  email?: string;
  url?: string;
  food_genre?: string;
  price_range?: string;
}

// export interface IBaseAttrInputs {
// }
