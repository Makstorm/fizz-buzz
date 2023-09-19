import express from "express";
import { FizzBuzzController } from "../controllers";
import { FizzBuzzService } from "../services";
import { checkQueryParams } from "../middleware";

const service = new FizzBuzzService();
const controller = new FizzBuzzController(service);

const router = express.Router();

router.get("/", checkQueryParams, controller.getFizzBuzz.bind(controller));

export default router;
