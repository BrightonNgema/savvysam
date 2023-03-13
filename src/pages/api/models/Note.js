import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  attachment: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.models.Note || mongoose.model("Note", NoteSchema);
