import { Error } from "mongoose";

import { Response, Request } from "express";
import { User, UserDocument } from "../models/User";
import { OAuthUser, OAuthUserModel } from "../models/OAuthUser";

/**
 * POST: Gets User Information based on access token
 * TODO: Authentication Required (since this endpoint gives out user information!!!)
 * @route POST /login/:accesstoken
 */
export const postLoginUser = (req: Request, res: Response) => {
  // If there is no access token then we are not going to be able to query the db for the user information
  if (
    req.params === undefined ||
    req.params === null ||
    req.params.accesstoken === undefined ||
    req.params.accesstoken === null
  ) {
    res.status(400).json({
      message: "No access token provided to query the user by",
      user: {},
    });
    return;
  }

  // Query the users in the db based on the auth0AccessToken
  User.findOne(
    { accessToken: req.params.accesstoken },
    (err: Error, user: UserDocument) => {
      // If there was an error report code 400 to the client
      if (err) {
        res.status(400).json({ message: err.message, user });
        return;
      }
      // If no user was found then report code 303 indicating the user should be redirected to onboarding
      if (user === null) {
        res.status(303).json({ message: "Could not find user in db", user });
        return;
      }
      // Successfully found the user information based on the auth0token
      res.status(200).json({ message: "success", user });
    }
  );
};

/**
 * POST: Creates User Information
 * @route POST /login/create
 */
export const createLoginUser = async (req: Request, res: Response) => {
  if (req.body === undefined || req.params === null) {
    res.status(400).send("Bad request");
  }

  const found = await OAuthUser.find({ googleId: req.body.id });

  if (found.length !== 0) {
    await OAuthUser.findOneAndUpdate(
      { googleId: req.body.id },
      {
        googleId: req.body.id,
        email: req.body.email,
        name: req.body.name,
      }
    );
  } else {
    await OAuthUser.create({
      googleId: req.body.id,
      email: req.body.email,
      name: req.body.name,
    });
  }

  res.status(200).send("User added to database");
};
