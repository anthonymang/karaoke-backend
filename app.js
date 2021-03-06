// Imports
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const PORT = process.env.PORT || 8000;

// API
const users = require('./api/users');
const videos = require('./api/videos')
const comments = require('./api/comments')


// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Initialize Passport and use config file
app.use(passport.initialize());
require('./config/passport')(passport)

// Home route
app.get('/', (req, res) => {
    res.send('This should be working')
});

// Routes
app.use('/api/users', users);
app.use('/api/videos', videos)
app.use('/api/comments', comments)


app.get('/*', (req, res) => {
    res.status(404).json({ message: 'Data not found' });
});

app.listen(PORT, () => {
    console.log(`Server is listening 🎧 on port: ${PORT}`);
});
