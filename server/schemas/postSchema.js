const Post = require('../models/Post');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require('graphql');

const PostType = new GraphQLObjectType({
  name: 'Post',

  fields: () => ({
    author: { type: GraphQLString },
    text: { type: GraphQLString },
  }),
});
