import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";

export const validateRequestBody = (schema: ZodObject<any>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      res.status(400).json({
        message: "Invalid request body",
        success: false,
        error: error,
      });
    }
  };
};
