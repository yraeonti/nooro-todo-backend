import express from "express";
import "express-async-errors";
import { errorHandler } from "./middlewares/error-handlers";
import cors from "cors";
import { taskRouter } from "./routes/tasks";
import { NotFoundError } from "./errors/not-found-error";

const app = express();

app.use(express.json());

app.use(cors());

app.use(taskRouter);

app.all("*", (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
