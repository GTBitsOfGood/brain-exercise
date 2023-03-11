import express from "express";
import AnalyticsRoute from "./analytics";
import { LoginRoute } from "./login";
import AuthRoute from "./auth";
import { testRouter } from "./test";
import { createLoginUser } from "../controllers/loginController";

export const defaultRouter = express.Router();

defaultRouter.post("/login/create", createLoginUser);

defaultRouter.use(LoginRoute);
defaultRouter.use("/analytics", AnalyticsRoute);

defaultRouter.use(testRouter);

defaultRouter.use("/auth", AuthRoute);
