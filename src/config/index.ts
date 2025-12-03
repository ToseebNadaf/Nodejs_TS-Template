import dotenv from "dotenv";

type serverPort = {
  PORT: Number;
};

export function loadConfig() {
  dotenv.config();
}

loadConfig();

export const getPort: serverPort = {
  PORT: Number(process.env.PORT),
};
