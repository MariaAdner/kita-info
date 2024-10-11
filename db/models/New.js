import mongoose from "mongoose";

const { Schema } = mongoose;

const newSchema = new Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  text: { type: String, required: true },
});

const New = mongoose.models.New || mongoose.model("New", newSchema);

export default New;
