import { Router } from "express";
import { pingController } from "../../controllers/ping.controller";

export const pingRouter = Router();

pingRouter.get("/", pingController);
