const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

const { Client } = require("../../models");
const ClientType = require("./ClientType");

const ProjectTYpe = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve({ client: id }) {
        return Client.findById(id);
      }
    }
  })
});

module.exports = ProjectTYpe;