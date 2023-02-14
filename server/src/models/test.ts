import mongoose, { ObjectId } from 'mongoose';

export type TestDocument = mongoose.Document & {
  date: Date;
  result: string; // the result of the test; did the user answer all questions or quit?
  numCorrect: Number; // the number of correct answers
  numQuestions: Number; // the total number of questions answered
  userId: ObjectId; // the id of the user who took the test
};

const testSchema = new mongoose.Schema<TestDocument>({
  date: { type: Date, required: true },
  result: { type: String, required: true, enum: ['QUIT', 'COMPLETED'] },
  numCorrect: { type: Number, required: true },
  numQuestions: { type: Number, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
});

export const Test = mongoose.model<TestDocument>('tests', testSchema);
