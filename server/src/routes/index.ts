import express from "express";
import { testRouter } from "./test";
import LoginRoute from './login';
import AuthRoute from "./auth";

export const defaultRouter = express.Router();

defaultRouter.use('/login', LoginRoute);

defaultRouter.use(testRouter);

defaultRouter.use('/auth', AuthRoute);
