import { Request, Response } from "express";
import { UserInput } from "../models/user.model";
import { CreateUser } from "../services/user.service";
// import { CreateUserInput } from "../schema/user.schema";
// import { createUser } from "../service/user.service";

// export async function createUserHandler(
//   req: Request<{}, {}, CreateUserInput["body"]>,
//   res: Response
// )
export async function createUserHandler(req: Request, res: Response) {
  const { selectedProduct, userInfo, selectedOption } = req.body.outputData;
  const userInfoData: UserInput = {
    product: selectedProduct,
    user: userInfo,
    option: selectedOption,
  };
  try {
    const result = await CreateUser(userInfoData);
    result
      ? res.status(201).json({
          result,
          msg: `Successfully created a new game with id ${result.insertedId}`,
        })
      : res.status(500).send("Failed to create a new game.");
    // do i need to return?
  } catch (error: any) {
    console.error(error);
    return res.status(400).send(error.message);
  }
}
