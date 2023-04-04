import { Int32 } from "bson";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, index: { unique: true } },
  lat: String,
  long: String,
  color: String,
  rname: String,
  route: [String],
  time: { type: Date, default: Date.now }
});

const Reality = mongoose.model("reals", UserSchema);

export default Reality;