import mongoose from "mongoose";

export type TestDocument = mongoose.Document & {
  accessToken: string;
  date: Date;
  result: string; // the result of the test; did the user answer all questions or quit?
  numCorrect: Number; // the number of correct answers
  numQuestions: Number; // the total number of questions answered
};

const testSchema = new mongoose.Schema<TestDocument>(
  {
    accessToken: { type: String, required: true },
    date: { type: Date, required: true },
    result: { type: String, required: true, enum: ["QUIT", "COMPLETED"] },
    numCorrect: { type: Number, required: true },
    numQuestions: { type: Number, required: true },
  }
);

export const Test = mongoose.model<TestDocument>("tests", testSchema);
