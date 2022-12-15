import { Request, Response } from "express";
import { UserInput } from "../models/user.model";
import { CreateUserInput } from "../schema/user.schema";
import { CreateUser } from "../services/user.service";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  const { option, user, product } = req.body;
  const userInfoData: UserInput = {
    product,
    user,
    option,
  };
  try {
    const result = await CreateUser(userInfoData);
    result
      ? res.status(201).json({
          result,
          msg: `Successfully created a new game with id ${result.insertedId}`,
        })
      : res.status(500).send("Failed to create a new game.");
  } catch (error: any) {
    console.error(error);
    return res.status(400).send(error.message);
  }
}
