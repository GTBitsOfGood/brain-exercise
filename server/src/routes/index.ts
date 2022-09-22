import express from "express";
import { testRouter } from "./test";

export const defaultRouter = express.Router();

defaultRouter.use(testRouter);
