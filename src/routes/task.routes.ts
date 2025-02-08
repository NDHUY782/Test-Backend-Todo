import express, { Router } from "express";
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/task.controllers";
const taskRoute = Router();

taskRoute.get("/", getTasks);

taskRoute.post("/", createTask);

taskRoute.get("/:task_id", getTaskById);

taskRoute.put("/:task_id", updateTask);

taskRoute.delete("/:task_id", deleteTask);

export default taskRoute;
