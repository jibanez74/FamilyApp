const mongoose = require('mongoose');

// define schema for a post model
const PostSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Author is required'],
    },

    image: String,

    text: {
      type: String,
      maxLength: [1000, 'Invalid post length'],
    },

    likes: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: [true, 'A like must have a user'],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.modelNames('Post', PostSchema);

module.exports = Post;
