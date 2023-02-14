import express from 'express';
import AnalyticsRoute from './analytics';
import LoginRoute from './login';
import { testRouter } from './test';

export const defaultRouter = express.Router();

defaultRouter.use('/login', LoginRoute);
defaultRouter.use('/analytics', AnalyticsRoute);

defaultRouter.use(testRouter);
