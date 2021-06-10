// Imports
require('dotenv').config();
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Models
const { Video } = require('../models');
const { findOne } = require('../models/User');

// Controllers
const index = async (req, res) => {
    console.log('inside of api/videos')
    try {
        const allVideos = await Video.find({})
        res.json({videos: allVideos})
    } catch (error) {
        console.log('---Error inside of /api/videos');
        console.log(error);
        return res.status(400).json({message: 'Videos not found'})
    }
}

const show = async (req, res) => {
    try {
        const { id } = req.params
        const thisVideo = await Video.findById(id)
        res.json(thisVideo)
    } catch (error) {
        console.log('---Error inside of /api/videos/:id---')
        console.log(error)
        return res.status(400).json({ message: 'Video not found. Try again...'})
    }
}

const create = async (req, res) => {

}

const update = async (req, res) => {

}

const deleteVideo = async (req, res) => {

}


// GET api/videos/test (Public)
router.get('/test', (req, res) => {
    res.json({ msg: 'Videos endpoint OK!'});
});

router.get('/', passport.authenticate('jwt', {session: false}), index);
router.get('/:id', /*passport.authenticate('jwt', {session: false}),*/ show);
router.post('/', passport.authenticate('jwt', { session: false }), create);
router.put('/', passport.authenticate('jwt', { session: false }), update);
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteVideo);

module.exports = router;