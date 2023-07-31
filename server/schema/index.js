const { GraphQLObjectType, GraphQLSchema } = require("graphql");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => (require("./resolvers"))
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => (require("./mutations"))
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

