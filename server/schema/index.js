const { GraphQLObjectType, GraphQLSchema } = require("graphql");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => (require("./resolvers"))
});

module.exports = new GraphQLSchema({
  query: RootQuery
});

