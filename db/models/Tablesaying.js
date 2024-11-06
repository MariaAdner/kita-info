import mongoose from "mongoose";

const { Schema } = mongoose;

const tablesayingSchema = new Schema({
  description: { type: String, required: true },
});

const Tablesaying =
  mongoose.models.Tablesaying ||
  mongoose.model("Tablesaying", tablesayingSchema);

export default Tablesaying;
