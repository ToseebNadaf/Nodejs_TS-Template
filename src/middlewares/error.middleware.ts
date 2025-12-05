import { NextFunction, Request, Response } from "express";

/**
 * @description: Generic error handler middleware
 * @param req
 * @param res
 * @param next
 */
export const genericErrorHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).send({ message: "Something went wrong!" });
};
