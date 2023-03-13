import mongoose from "mongoose";

const ReminderSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports =
  mongoose.models.Reminder || mongoose.model("Reminder", ReminderSchema);
