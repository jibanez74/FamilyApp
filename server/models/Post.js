const mongoose = require('mongoose');
const User = require('./User');

// define simple schema for a comment
const CommentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Comment author / name is required'],
    },

    avatar: {
      type: String,
      required: [true, 'Comment avatar is required'],
    },

    text: {
      type: String,
      required: [true, 'Text is required'],
      maxLength: [500, 'Comment must not be longer than 500 characters'],
    },
  },
  {
    timestamps: true,
  }
);

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

    comments: [CommentSchema],

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
