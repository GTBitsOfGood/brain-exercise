import mongoose from "mongoose";

const bcrypt = require("bcrypt");

export type UserDocument = mongoose.Document & {
  name: string;
  phoneNumber: number;
  birthdate: Date;
  accessToken: string;
  secondaryContactName: string;
  secondaryPhoneNumber: string;
  googleId: string;
};

const userSchema = new mongoose.Schema<UserDocument>(
  {
    name: { type: String, required: true },
    phoneNumber: { type: Number, required: false },
    birthdate: { type: Date, required: false },
    accessToken: { type: String, required: true, unique: true },
    secondaryContactName: { type: String, required: false },
    secondaryPhoneNumber: { type: String, required: false },
    googleId: { type: String, required: false },
  },
  { timestamps: true }
);

export const User = mongoose.model<UserDocument>("users", userSchema);
