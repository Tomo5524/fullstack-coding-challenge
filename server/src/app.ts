import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { connectToDatabase } from "./services/database.service";
import routes from "./router/router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors({ origin: true, credentials: true }));

connectToDatabase()
  .then(() => {
    console.log("fired");
    routes(app);
    // app.use("/api/user-info", userRouter);
    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });
