const { Video } = require("./models");
const { User } = require("./models");
const { Comment } = require("./models");

User.create(
  {
    name: "Omar",
    email: "omar@mail.com",
    password: "thisismypassword",
    followerArray: ["Anthony", "Edison", "Dave"],
    followingArray: ["Anthony", "Edison", "Dave"],
  },
  (err, user) => {
    if (err) console.log(err);
    console.log(user);

    Video.create(
      {
        url: "https://res.cloudinary.com/sei412-om/video/upload/v1623251186/mylivewallpapers.com-Itachi-Sharigan_ttvtvy.mp4",
        title: "Itachi",
        description: "Video of Itachi",
        likes: 2,
        public: true,
        thumbnail: 'https://res-console.cloudinary.com/sei412-om/thumbnails/v1/video/upload/v1623251186/bXlsaXZld2FsbHBhcGVycy5jb20tSXRhY2hpLVNoYXJpZ2FuX3R0dnR2eQ==/preview'
      },
      (err, video) => {
        user.videos.push(video);
        console.log(user);

        Comment.create(
          { content: "This is dope!!", likes: 25 },
          (err, comment) => {
            console.log(video);
            video.comments.push(comment);
            user.comments.push(comment);
            console.log(comment);
          }
        );
        Comment.create(
            { content: "Yoo!", likes: 35 },
            (err, comment) => {
              console.log(video);
              video.comments.push(comment);
              user.comments.push(comment);
              video.save();
              user.save();
              console.log(comment);
            }
          );
      }
    );
  }
);

User.create(
  {
    name: "Anthony",
    email: "ant@mail.com",
    password: "thisismypassword",
    followerArray: ["Omar", "Edison", "Dave"],
    followingArray: ["Omar", "Edison", "Dave"],
  },
  (err, user) => {
    if (err) console.log(err);
    console.log(user);

    Video.create(
      {
        url: "https://res.cloudinary.com/sei412-om/video/upload/v1623251806/mylivewallpapers.com-Rick-N-Morty-Adventures_ltjonh.mp4",
        title: "Rick & Morty",
        description: "Video of Rick & Morty",
        likes: 10,
        public: true,
        thumbnail: 'https://res-console.cloudinary.com/sei412-om/thumbnails/v1/video/upload/v1623251806/bXlsaXZld2FsbHBhcGVycy5jb20tUmljay1OLU1vcnR5LUFkdmVudHVyZXNfbHRqb25o/preview'
      },
      (err, video) => {
        user.videos.push(video);
        console.log(user);

        Comment.create(
          { content: "You're a great singer!", likes: 55 },
          (err, comment) => {
            console.log(video);
            video.comments.push(comment);
            user.comments.push(comment);
            video.save();
            user.save();
            console.log(comment);
          }
        );
      }
    );
  }
);

User.create(
  {
    name: "Dave",
    email: "dave@mail.com",
    password: "thisismypassword",
    followerArray: ["Omar", "Edison", "Anthony"],
    followingArray: ["Omar", "Edison", "Anthony"],
  },
  (err, user) => {
    if (err) console.log(err);
    console.log(user);

    Video.create(
      {
        url: "https://res.cloudinary.com/sei412-om/video/upload/v1623251809/mylivewallpapers.com-Itachi-Uchiha-Naruto_lvuqvv.mp4",
        title: "Itachi 2",
        description: "Video 2 of Itachi",
        likes: 100,
        public: true,
        thumbnail: 'https://res-console.cloudinary.com/sei412-om/thumbnails/v1/video/upload/v1623251809/bXlsaXZld2FsbHBhcGVycy5jb20tSXRhY2hpLVVjaGloYS1OYXJ1dG9fbHZ1cXZ2/preview'
      },
      (err, video) => {
        user.videos.push(video);
        console.log(user);

        Comment.create(
          { content: "Love this song!", likes: 38 },
          (err, comment) => {
            console.log(video);
            video.comments.push(comment);
            user.comments.push(comment);
            video.save();
            user.save();
            console.log(comment);
          }
        );
      }
    );
  }
);

User.create(
  {
    name: "Edison",
    email: "edi@mail.com",
    password: "thisismypassword",
    followerArray: ["Omar", "Dave", "Anthony"],
    followingArray: ["Omar", "Dave", "Anthony"],
  },
  (err, user) => {
    if (err) console.log(err);
    console.log(user);

    Video.create(
      {
        url: "https://res.cloudinary.com/sei412-om/video/upload/v1623251812/mylivewallpapers.com-Hatake-Kakashi-Naruto_nijc19.mp4",
        title: "Kakashi",
        description: "Video of Kakashi",
        likes: 1000,
        public: true,
        thumbnail: 'https://res-console.cloudinary.com/sei412-om/thumbnails/v1/video/upload/v1623251812/bXlsaXZld2FsbHBhcGVycy5jb20tSGF0YWtlLUtha2FzaGktTmFydXRvX25pamMxOQ==/preview'
      },
      (err, video) => {
        user.videos.push(video);
        console.log(user);

        Comment.create(
          { content: "OMG I didn't know you could sing", likes: 45 },
          (err, comment) => {
            console.log(video);
            video.comments.push(comment);
            user.comments.push(comment);
            video.save();
            user.save();
            console.log(comment);
          }
        );
      }
    );
  }
);


