import { Router } from "express";
import { pingRouter } from "./ping.router";
import { validateRequestBody } from "../../validators";
import { pingSchema } from "../../validators/ping.validator";

export const v1Router = Router();

v1Router.use("/ping", validateRequestBody(pingSchema), pingRouter);
