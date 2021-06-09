const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  video: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }],
  content: String,
  likes: Number,
  timestamps: true,
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
