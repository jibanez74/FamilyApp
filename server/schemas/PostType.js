const Post = require('../models/Post');
const Comment = require('../models/Comment');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = require('graphql');

const PostType = new GraphQLObjectType({
  name: 'Post',

  fields: () => ({
    id: { type: GraphQLID },
    author: { type: GraphQLString },
    image: { type: GraphQLString },
    text: { type: GraphQLString },
    likes: { type: GraphQLList },
  }),
});

const CommentType = new GraphQLObjectType({
  name: 'Comment',

  fields: () => ({
    author: { type: GraphQLString },
    post: { type: PostType },
    text: { type: GraphQLString },
  }),
});

module.exports = {
  PostType,
  CommentType,
};
