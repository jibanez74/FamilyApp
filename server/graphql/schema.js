const { UserType } = require('./UserType');
const { PostType, CommentType } = require('./PostType');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require('graphql');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',

  fields: {
    // getPost
    // get a single post by its id
    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Post.findById(args.id);
      },
    },

    // getPosts
    // get all posts with pagination
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return Post.find();
      },
    },

    // getComment
    // get a single comment by its id
    comment: {
      type: CommentType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Comment.findById(args.id);
      },
    },

    // getComments
    // get all comments that belong to a post
    comments: {
      type: new GraphQLList(CommentType),
      resolve(parent, args) {
        return Comment.find(parent.id);
      },
    },
  },
});

const mutations = new GraphQLObjectType({
  name: 'Mutation',

  fields: {
    createPost: {
      type: PostType,
      args: {
        author: { type: GraphQLNonNull(GraphQLString) },
        image: { type: GraphQLString },
        text: { type: GraphQLNonNull(GraphQLString) },
      },

      resolve(parent, args) {
        const post = {
          author: args.author,
          text: args.text,
        };

        if (args.image) post.image = args.image;

        return Post.create(post);
      },
    },
  },
});

module.exports = {
  query: RootQuery,
  mutations,
};
