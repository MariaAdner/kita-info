import mongoose from "mongoose";
import Survey from "./Survey";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  surveys: [{ type: Schema.Types.ObjectId, ref: "Survey" }],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
