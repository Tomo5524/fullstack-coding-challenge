import { UserInput } from "../models/user.model";
import { collections } from "./database.service";

export async function CreateUser(input: UserInput) {
  try {
    const { emailAddress } = input.user;
    const existingUser = await collections!.users!.findOne({
      "user.emailAddress": emailAddress,
    });
    if (!existingUser) {
      // const user = await userModel.create(input);
      const user = await collections!.users!.insertOne(input);
      return user;
    } else {
      throw new Error("email already in use");
    }
  } catch (e: any) {
    throw new Error(e);
  }
}
