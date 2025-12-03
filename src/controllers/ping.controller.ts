import { Request, Response } from "express";

export const pingController = (req: Request, res: Response) => {
  res.send("pong");
};
