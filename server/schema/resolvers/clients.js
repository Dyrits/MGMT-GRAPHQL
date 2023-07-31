const { GraphQLList, GraphQLID } = require("graphql");

const { Client } = require("../../models");
const { ClientType } = require("./../types");

module.exports = {
  clients: {
    type: GraphQLList(ClientType),
    resolve() {
      return Client.find();
    }
  },
  client: {
    type: ClientType,
    args: { id: { type: GraphQLID } },
    resolve(_, { id }) {
      return Client.findById(id);
    }
  }
};