require("dotenv").config();
const colors = require("colors");
const cors = require("cors");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const connect = require("./database");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.use("/graphql", graphqlHTTP({
  schema: require("./schema"),
  graphiql: process.env.NODE_ENV === "DEVELOPMENT",
}));

connect().then(() => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
  });
});

