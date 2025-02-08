import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Task } from "../entities/task.entities";
import { validateTask } from "../utils/validation";

const taskRepository = AppDataSource.getRepository(Task);

export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, startDate, endDate } = req.body;
    validateTask(name, startDate, endDate);
    const task = taskRepository.create({ name, startDate, endDate });

    await taskRepository.save(task);
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

export const getTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tasks = await taskRepository.find();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

export const getTaskById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { task_id } = req.params;
    const task = await taskRepository.findOneBy({
      id: Number(task_id),
    });
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { task_id } = req.params;
    const { name, startDate, endDate } = req.body;
    validateTask(name, startDate, endDate);
    const task = await taskRepository.findOneBy({ id: Number(task_id) });
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    task.name = name;
    task.startDate = startDate;
    task.endDate = endDate;

    await taskRepository.save(task);
    const updatedTask = await taskRepository.findOneBy({ id: Number(task_id) });
    res.status(200).json(updatedTask);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { task_id } = req.params;
    console.log(task_id);
    const task = await taskRepository.findOneBy({ id: Number(task_id) });
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    await taskRepository.delete(task);
    res.status(200).json("Deleted Success");
  } catch (error) {
    next(error);
  }
};
