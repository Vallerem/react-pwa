import React from "react";
import ReactDOM from "react-dom";

import "semantic-ui-css/semantic.min.css";
import "index.css";

import App from "App";
import registerServiceWorker from "registerServiceWorker";

import ApolloClient from "apollo-boost";
// import { HttpLink } from "apollo-link-http"; // NCATM
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory"; 

import gql from "graphql-tag";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql",
  cache
});

// current local graphql
// http://localhost:60050

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

registerServiceWorker();
