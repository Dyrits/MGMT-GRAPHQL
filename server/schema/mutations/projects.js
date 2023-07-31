const { GraphQLString, GraphQLID, GraphQLNonNull, GraphQLEnumType } = require("graphql");

const { Client, Project } = require("../../models");
const { ClientType, ProjectType } = require("./../types");

const StatusType = new GraphQLEnumType({
  name: "Status",
  values: {
    INACTIVE: { value: "Not started" },
    ACTIVE: { value: "In progress" },
    COMPLETED: { value: "Completed" }
  }
})

module.exports = {
  CreateProject: {
    type: ProjectType,
    args: {
      name: { type: GraphQLNonNull(GraphQLString) },
      description: { type: GraphQLNonNull(GraphQLString) },
      status: {
        type: StatusType,
        defaultValue: "Not started"
      },
      client: { type: GraphQLNonNull(GraphQLID) }
    },
    resolve(_, { name, description, status, client }) {
      return Project.create({ name, description, status, client });
    }
  },
  UpdateProject: {
    type: ProjectType,
    args: {
      id: { type: GraphQLNonNull(GraphQLID) },
      name: { type: GraphQLNonNull(GraphQLString) },
      description: { type: GraphQLNonNull(GraphQLString) },
      status: {
        type: StatusType
      }
    },
    client: { type: GraphQLID },
    resolve(_, { id, name, description, status, client }) {
      return Project.findByIdAndUpdate(id, { name, description, status, client }, { new: true })
    }
  },
  DeleteProject: {
    type: ProjectType,
    args: {
      id: { type: GraphQLNonNull(GraphQLID) }
    },
    resolve(_, { id }) {
      return Project.findByIdAndDelete(id);
    }
  }
};