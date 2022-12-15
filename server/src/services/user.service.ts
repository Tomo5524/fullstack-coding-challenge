import { UserInput } from "../models/user.model";
import { collections } from "./database.service";

export async function CreateUser(input: UserInput) {
  try {
    // const user = await UserModel.create(input);
    const user = await collections!.users!.insertOne(input);

    // to remove all records Of a collection
    // await collections!.users!.deleteMany({});
    return user;
  } catch (e: any) {
    throw new Error(e);
  }
}
