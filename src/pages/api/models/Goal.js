import mongoose from "mongoose";

const GoalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.models.Goal || mongoose.model("Goal", GoalSchema);
