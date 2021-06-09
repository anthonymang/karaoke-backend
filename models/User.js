const mongoose = require("mongoose");
const { Schema } = mongoose;

// User Schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  followerArray: [],
  followingArray: [],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
