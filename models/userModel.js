import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    role: { type: String, default: "user" },
    name: String,
    email: String,
    password: { type: String, select: false },
    bname: { type: String, default: "" },
    auth: { type: String, default: "" },
    color: { type: String, default: "" },
    rname: { type: String, default: "" },
});

const Reality = mongoose.model("users", userSchema);

export default Reality;