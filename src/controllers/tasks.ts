import { db } from "..";
import { Request, Response } from "express";
import { body, param } from "express-validator";
import { validateRequest } from "../middlewares/validate-request";

export const createTask = [
  [
    body("title").notEmpty().isString().withMessage("provide valid title"),
    body("color").notEmpty().isString().withMessage("provide valid color"),
  ],

  validateRequest,
  async (req: Request, res: Response) => {
    const { title, color } = req.body;
    await db.tasks.create({
      data: {
        title,
        color,
      },
    });

    res.send({
      status: true,
      message: "task created",
    });
  },
];

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await db.tasks.findMany();
  res.send({
    status: true,
    data: tasks,
  });
};

export const updateTask = [
  [
    param("id").notEmpty().isNumeric(),
    body("title").optional().isString(),
    body("color").optional().isString(),
    body("completed").optional().isBoolean(),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const { title, color, completed } = req.body;

    const options = {
      title,
      color,
      completed,
    };

    if (!title) delete options.title;
    if (!color) delete options.color;
    if (typeof completed != "boolean") delete options.completed;

    await db.tasks.update({
      where: {
        id: Number(id),
      },
      data: options,
    });

    res.send({
      status: true,
      message: "task updated",
    });
  },
];

export const deleteTask = [
  param("id").notEmpty().isNumeric(),
  validateRequest,
  async (req: Request, res: Response) => {
    const { id } = req.params;

    await db.tasks.delete({
      where: {
        id: Number(id),
      },
    });

    res.send({
      status: true,
      message: "task deleted",
    });
  },
];
