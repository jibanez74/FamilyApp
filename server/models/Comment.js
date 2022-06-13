const mongoose = require('mongoose');

// define simple schema for a comment
const CommentSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      required: [true, 'Post is required'],
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Author is required'],
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

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
