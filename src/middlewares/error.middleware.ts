import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/errors/app.error";

/**
 * @description: Generic error handler middleware
 * @param req
 * @param res
 * @param next
 */
export const genericErrorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.statusCode).send({ message: err.message });
};
