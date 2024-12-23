import express from "express";
import { createTask, getTasks } from "../controllers/tasks";

const router = express.Router();

router.post("/tasks", ...createTask);

export { router as taskRouter };
