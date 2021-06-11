const mongoose = require('mongoose')
const {Schema} = mongoose

const videoSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true 
    },
    description: {
        type: String,
    },
    likes: {
        type: Number,
    },
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
    public: {
        type: Boolean,
        required: true
    },
    userId: String,
    thumbnail: {
        type: String,
        required: true
    }
},{timestamps: true})

const Video = mongoose.model('Video', videoSchema);

module.exports = Video