const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const port = process.env.PORT || 7000;

// Some fake data
const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

const booksMeh = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: "ddddd"
  },
  {
    title: "f sd",
    author: "sd sd"
  }
];

// The GraphQL schema in string form
const typeDefs = `
  type Query { books: [Book] }
  type Book { title: String, author: String }
`;

// The resolvers
const resolvers = {
  Query: { books: () => books }
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});



// Initialize the app
const app = express();

// The GraphQL endpoint
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

// extra
app.get("/api/hello", (req, res) => {
  res.send({ Hello: "World" });
});

// Start the server
app.listen(port, () => {
  console.log("Go to http://localhost:7000/graphiql to run queries!");
});
