import express from "express";
import { testRouter } from "./test";
import LoginRoute from './login';

export const defaultRouter = express.Router();

defaultRouter.use('/login', LoginRoute);

defaultRouter.use(testRouter);
