import mongoose from "mongoose";
import Query from "./Query";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  queryanswer: { type: [Schema.Types.ObjectId], ref: "Query" },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
