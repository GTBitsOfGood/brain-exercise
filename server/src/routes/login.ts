import express from "express";
import * as loginController from "../controllers/loginController";

export const LoginRoute = express.Router();
/*
 * Code routes here for login
 */
LoginRoute.post("/:accesstoken", loginController.postLoginUser);

// LoginRoute.post('/create', loginController.createLoginUser);
