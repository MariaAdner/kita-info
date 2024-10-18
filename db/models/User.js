import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String },
  password: { type: String },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
