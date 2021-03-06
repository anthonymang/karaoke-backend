// Imports
require("dotenv").config();
const express = require("express");
const router = express.Router();
const passport = require("passport");

// Models
const { Video } = require("../models");
const { User } = require("../models");

const { findOne } = require("../models/User");

// Controllers
const index = async (req, res) => {
  try {
    const allVideos = await Video.find({});
    res.json(allVideos);
  } catch (error) {
    return res.status(400).json({ message: "Videos not found" });
  }
};

const show = async (req, res) => {
  try {
    const { id } = req.params;
    const thisVideo = await Video.findById(id).populate("comments");
    res.json(thisVideo);
  } catch (error) {
    return res.status(400).json({ message: "Video not found. Try again..." });
  }
};

const trending = async (req, res) => {
  try {
    const videos = await Video.find().sort({ likes: -1 }).limit(25);
    if (!videos) {
      return res.status(400).json({ message: "No videos found...." });
    } else {
      res.json(videos);
    }
  } catch (error) {
    return res.status(400).json({ message: "Videos not found. Try again..." });
  }
};

const create = async (req, res) => {
  try {
    const { userId, url, title, description, thumbnail, public } = req.body;
    const findUser = await User.findById(userId, async (err, user) => {
      const thisVideo = await new Video({
        url: url,
        title: title,
        description: description,
        public: public,
        thumbnail: thumbnail,
      }).save();
      user.videos.push(thisVideo);
      user.save();
      res.json(thisVideo);
    });
  } catch (error) {
    return res.status(400).json({ message: "Video not created. Try again..." });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const thisVideo = await Video.findByIdAndUpdate(
      id,
      { title: title, description: description },
      { new: true }
    );
    res.json(thisVideo);
  } catch (error) {
    return res.status(400).json({ message: "Video not deleted. Try again..." });
  }
};

const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const thisVideo = await Video.findByIdAndDelete(id);
    return res.json(thisVideo);
  } catch (error) {
    return res.status(400).json({ message: "Video not deleted. Try again..." });
  }
};

// GET api/videos/test (Public)
router.get("/test", (req, res) => {
  res.json({ msg: "Videos endpoint OK!" });
});

router.get("/", index);

router.get("/trending", trending);
router.get("/:id", show);

router.post("/", /*passport.authenticate('jwt', { session: false }),*/ create);
router.put("/:id", passport.authenticate("jwt", { session: false }), update);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteVideo
);

module.exports = router;
