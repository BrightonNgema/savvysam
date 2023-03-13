import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  attachment: { type: String },
  deadline: { type: Date, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.models.Task || mongoose.model("Task", TaskSchema);
