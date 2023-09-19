import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import router from "./routers";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use(router);

const start = async (): Promise<void> => {
  try {
    app.listen(PORT, (): void => {
      console.log(`Server started on port http://localhost:${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
