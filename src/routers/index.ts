import express from "express";
import fizzBuzzRouter from "./fizzbuzzRouter";

const router = express.Router();

router.use("/fizz-buzz", fizzBuzzRouter);

export default router;
