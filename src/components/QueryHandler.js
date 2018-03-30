import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loading from "./Loading";

// TODO: make it dynamic
const QueryHandler = ({ query, component, loadingSize }) => (
  <Query
    query={gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <Loading size={loadingSize} />;
      if (error) return <p>Error :(</p>;

      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>{`${currency}: ${rate}`}</p>
        </div>
      ));
    }}
  </Query>
);

export default QueryHandler;
