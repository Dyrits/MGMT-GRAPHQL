const { GraphQLNonNull, GraphQLString, GraphQLID } = require("graphql");

const { ClientType } = require("../types");

module.exports = {
  CreateClient: {
    type: ClientType,
    args: {
      name: { type: GraphQLNonNull(GraphQLString) },
      email: { type: GraphQLNonNull(GraphQLString) },
      phone: { type: GraphQLNonNull(GraphQLString) }
    },
    resolve(_, { name, email, phone }) {
      return Client.create({ name, email, phone });
    }
  },
  DeleteClient: {
    type: ClientType,
    args: {
      id: { type: GraphQLNonNull(GraphQLID) }
    },
    resolve(_, { id }) {
      return Client.findByIdAndDelete(id);
    }
  }
};