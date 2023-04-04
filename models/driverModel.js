import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: { type: String, select: false },
    bname: { type: String, default: "" },
    auth: { type: String, default: "" },
    color: { type: String, default: "" },
    rname: { type: String, default: "" },
});

const Reality = mongoose.model("drivers", userSchema);

export default Reality;