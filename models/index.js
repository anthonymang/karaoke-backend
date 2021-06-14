require("dotenv").config();
const mongoose = require("mongoose");

let connectionString = "";
if (process.env.NODE_ENV === "production") {
  connectionString = process.env.DB_URL;
} else {
  connectionString = process.env.MONGO_URI;
}
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
});

const db = mongoose.connection;

// Set up event for db to print connection
db.once("open", () => {
  console.log(`Connect to MongoDB at ${db.host}: ${db.port}`);
});

db.on("error", (error) => {
  console.log(`Database error`, error);
});

// import all models here
const User = require("./User");
const Video = require("./Video");
const Comment = require("./Comment");

module.exports = {
  User,
  Video,
  Comment,
};
