import { Response, Request } from "express";
import { TimeDocument, Time } from "../models/Time";

export const updateTimeEntry = async (req: Request, res: Response) => {
  if (
    req.body === undefined ||
    req.body === null ||
    // req.body.accesstoken === undefined ||
    // req.body.accesstoken === null ||
    req.body.type === undefined ||
    req.body.type === null ||
    req.body.time === undefined ||
    req.body.time === null
  ) {
    res.status(400).json({
      message: "No access token provided",
    });
    return;
  }

  const date = new Date().toString();
  const today = date.split(" ").splice(1, 3).join(" ");

  await Time.updateOne(
    { accessToken: "109" },
    {
      $inc: { [`${req.body.type}.${today}`]: req.body.time },
      $setOnInsert: { accessToken: req.body.accesstoken }, // initialize user's name as well (and other relevant info)
    },
    { upsert: true }
  ).catch((err) => console.log(err));
};
