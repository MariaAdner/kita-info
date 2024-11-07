import mongoose from "mongoose";

const { Schema } = mongoose;

const querySchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  query: { type: String, required: true },
});

const Query = mongoose.models.Query || mongoose.model("Query", querySchema);

export default Query;
