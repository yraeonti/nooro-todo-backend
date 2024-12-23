import { db } from "..";
import { Request, Response } from "express";
import { body } from "express-validator";
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
