import mongoose from "mongoose";

export type TestCompletionDocument = mongoose.Document & {
  accessToken: string;
  startDate: Date;
  endDate: Date;
};

const testCompletionSchema = new mongoose.Schema<TestCompletionDocument>(
  {
    accessToken: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true }
  }
);

export const TestCompletion = mongoose.model<TestCompletionDocument>("test-completion", testCompletionSchema);
