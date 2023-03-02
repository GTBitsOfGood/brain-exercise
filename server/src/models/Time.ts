import mongoose from "mongoose";

export type TimeDocument = mongoose.Document & {
  accessToken: string;
  name: string;
  readingTime: Map<String, number>;
  writingTime: Map<String, number>;
  mathTime: Map<String, number>;
  totalScreenTime: Map<String, number>;
};

const timeSchema = new mongoose.Schema<TimeDocument>({
  accessToken: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  readingTime: {
    type: Map<String, Number>,
    required: true,
  },
  writingTime: {
    type: Map<String, Number>,
    required: true,
  },
  mathTime: {
    type: Map<String, Number>,
    required: true,
  },
  totalScreenTime: { type: Map<String, Number>, required: false },
});

export const Time = mongoose.model<TimeDocument>("screen-times", timeSchema);
