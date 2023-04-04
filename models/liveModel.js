import { Int32 } from "bson";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  color: String,
  face: { type: Boolean, default: false },
  route: [String],
  broute: [String],
  troute: [String],
  nroute: [String],
  location: [Number],
  time: { type: Date, default: Date.now }
});

UserSchema.index("time", { expireAfterSeconds: 5 })


const Reality = mongoose.model("lives", UserSchema);

export default Reality;