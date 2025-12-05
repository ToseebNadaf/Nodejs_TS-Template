import express from "express";
import { getPort } from "./config";
import { v1Router } from "./routers/v1/index.router";
import { genericErrorHandler } from "./middlewares/error.middleware";

const app = express();
app.use(express.json());

/**
 * Registering all routes
 */
app.use("/api/v1", v1Router);

/**
 * Global Error Handler Middleware
 */
app.use(genericErrorHandler);

app.listen(getPort.PORT, () => {
  console.log(`Server is running on port ${getPort.PORT}`);
});
