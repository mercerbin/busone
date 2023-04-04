import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  route: [String],
});

const Reality = mongoose.model("routes", UserSchema);

export default Reality;