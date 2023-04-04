import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  lati: Number,
  longi: Number,
});

const Reality = mongoose.model("bstops", UserSchema);

export default Reality;