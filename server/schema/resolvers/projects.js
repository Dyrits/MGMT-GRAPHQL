const { GraphQLList, GraphQLID } = require("graphql");

const { Project } = require("../../models");
const { ProjectType } = require("./../types");

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
    resolve(_, { id }) {
      return Project.findById(id);
    }
  }
};