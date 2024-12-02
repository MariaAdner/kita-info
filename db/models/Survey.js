import mongoose from "mongoose";

const { Schema } = mongoose;

const surveySchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  answer: { type: String, required: true },
});

const Survey = mongoose.models.Survey || mongoose.model("Survey", surveySchema);

export default Survey;
