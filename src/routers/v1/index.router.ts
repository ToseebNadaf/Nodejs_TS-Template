import { Router } from "express";
import { pingRouter } from "./ping.router";

export const v1Router = Router();

v1Router.use("/ping", pingRouter);
