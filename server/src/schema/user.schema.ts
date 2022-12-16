import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    product: string({
      required_error: "product is required",
    }),
    option: string({
      required_error: "option is required",
    }),
    user: object({
      firstName: string({
        required_error: "firstName is required",
      }),
      lastName: string({
        required_error: "lastName is required",
      }),
      fnameKana: string({
        required_error: "fnameKana is required",
      }),
      lnameKana: string({
        required_error: "lnameKana is required",
      }),
      gender: string({
        required_error: "gender is required",
      }),
      age: string({
        required_error: "age is required",
      })
        .min(1, "Age too small - should be 2 chars minimum")
        .max(2, "Age too big - cannot be more than 2 chars"),
      vehicleType: string({
        required_error: "vehicleType is required",
      }),
      postCode: string({
        required_error: "postCode is required",
      }).max(7, "postCode too long - cannot be more than 7 chars"),
      city: string({
        required_error: "city is required",
      }),
      address: string({
        required_error: "address is required",
      }),
      emailAddress: string({
        required_error: "Email is required",
      }).email("Not a valid email"),
    }),
  }),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>;
