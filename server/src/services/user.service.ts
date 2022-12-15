import UserModel, { UserDocument, UserInput } from "../models/user.model";
import { collections } from "./database.service";

export async function CreateUser(input: UserInput) {
  try {
    // const user = await UserModel.create(input);
    const user = await collections!.users!.insertOne(input);
    console.log("🚀 ~ file: user.service.ts:8 ~ CreateUser ~ user", user);
    // to remove all records Of a collection
    // await collections!.users!.deleteMany({});
    return user;
  } catch (e: any) {
    throw new Error(e);
  }
}
