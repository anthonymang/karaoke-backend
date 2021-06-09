const mongoose = require('mongoose')
const {Schema} = mongoose

const videoSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    user: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    title: {
        type: String,
        required: true 
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
        required: true,
    },
    likes: {
        type: Number,
    },
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
    public: {
        type: Boolean,
        required: true
    }
})

const Video = mongoose.model('Video', videoSchema);

module.exports = Video