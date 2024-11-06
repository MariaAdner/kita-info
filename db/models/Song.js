import mongoose from "mongoose";

const { Schema } = mongoose;

const songSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Song = mongoose.models.Song || mongoose.model("Song", songSchema);

export default Song;
