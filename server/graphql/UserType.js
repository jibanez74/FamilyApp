const User = require('../models/User');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLBoolean,
} = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'User',

  fields: () => ({
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    isAdmin: { type: GraphQLBoolean },
    avatar: { type: GraphQLString },
  }),
});

module.exports = {
  UserType,
};
