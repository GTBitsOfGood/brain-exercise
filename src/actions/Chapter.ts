import ChapterModel from "../models/Chapter";
import dbConnect from "./dbConnect";

export async function getAllChapters() {
  await dbConnect();
  console.log(ChapterModel.find());
  return ChapterModel.find();
}
