import { Schema, model } from "mongoose";

interface Test {
  name: string;
  age: number;
}

const TestSchema = new Schema<Test>({
  name: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
});

const TestModel = model("Test", TestSchema);

export default TestModel;
