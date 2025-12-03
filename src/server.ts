import express from "express";
import { getPort } from "./config";
import { v1Router } from "./routers/v1/index.router";

const app = express();

app.use("/api/v1", v1Router);

app.listen(getPort.PORT, () => {
  console.log(`Server is running on port ${getPort.PORT}`);
});
