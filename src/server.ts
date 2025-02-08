import "reflect-metadata";
import * as dotenv from "dotenv";
import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { Router } from "express";

import { errorHandler } from "./middlewares/task.middlewares";

import { AppDataSource } from "./data-source";

import taskRoute from "./routes/task.routes";
const app = express();
const router = Router();

const PORT = process.env.PORT || 4000;

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("trust proxy", 1);
app.use(cors());

// Root route
app.get("/", (_, res: Response) => {
  res.send("Twitter server is running");
});

app.use("/api", taskRoute);

app.use(errorHandler);
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
export default app;
