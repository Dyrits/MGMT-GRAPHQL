const { GraphQLList, GraphQLID } = require("graphql");

const { Client, Project } = require("../models");
const { ProjectType, ClientType } = require("./types");

module.exports = {
  projects: {
    type: GraphQLList(ProjectType),
      resolve() {
      return Project.find();
    }
  },
  project: {
    type: ProjectType,
      args: { id: { type: GraphQLID } },
    resolve(parent, { id }) {
      return Project.findById(id);
    }
  },
  clients: {
    type: GraphQLList(ClientType),
      resolve() {
      return Client.find();
    }
  },
  client: {
    type: ClientType,
      args: { id: { type: GraphQLID } },
    resolve(parent, { id }) {
      return Client.findById(id);
    }
  }
};