import express from "express";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/tasks";

const router = express.Router();

router
  .post("/tasks", ...createTask)
  .get("/tasks", getTasks)
  .put("/tasks/:id", ...updateTask)
  .delete("/tasks/:id", ...deleteTask);

export { router as taskRouter };
