// Imports
require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const JWT_SECRET = process.env.JWT_SECRET;

const { Comment } = require("../models");

const show = async (req, res) => {
  try {
    const { id } = req.params;
    const thisComment = await Comment.findById(id);
    res.json(thisComment);
  } catch (error) {
    return res.status(400).json({ message: "Video not found. Try again..." });
  }
};

router.get("/:id", show);

module.exports = router;
