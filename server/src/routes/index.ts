import express from "express";
import { testRouter } from "./test";
import LoginRoute from './login';
import AnalyticsRoute from './analytics';

export const defaultRouter = express.Router();

defaultRouter.use('/login', LoginRoute);
defaultRouter.use('/analytics', AnalyticsRoute);

defaultRouter.use(testRouter);
