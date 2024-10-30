import mongoose from "mongoose";
import { Chapter } from "../types";

const ChapterSchema = new mongoose.Schema<Chapter>({
  name: {
    type: String,
    required: true,
  },
  chapterPresident: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
  },
  patients: {
    type: Number,
    required: false,
  },
  yearFounded: {
    type: Number,
    required: false,
  },
  location: {
    type: {
      city: String,
      state: String,
      country: String,
    },
    required: false,
  },
  activeVolunteers: {
    type: Number,
    required: false,
  },
  inactiveVolunteers: {
    type: Number,
    required: false,
  },
});

const ChapterModel =
  (mongoose.models.Chapter as mongoose.Model<Chapter>) ||
  mongoose.model<Chapter>("Chapter", ChapterSchema);

export default ChapterModel;
