import mongoose from "mongoose";

const bcrypt = require("bcrypt");

export type OAuthUserModel = mongoose.Document & {
  googleId: string;
  name: string;
  email: string;
};

const oauthUserSchema = new mongoose.Schema<OAuthUserModel>(
  {
    googleId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);

export const OAuthUser = mongoose.model<OAuthUserModel>(
  "oauthusers",
  oauthUserSchema
);
