const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  content: String,
  likes: Number,
}, {timestamps: true});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
