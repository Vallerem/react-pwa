import React from "react";
import { Query } from "react-apollo";
import withConsumer from "../context/Consumer";
import Loading from "./Loading";
import ErrorHandler from "./ErrorHandler";

const QueryHandler = ({
  query,
  Component,
  loadingSize,
  globalState,
  actions
}) => (
  <Query query={query}>
    {({ loading, error, data, ...rest }) => {
      if (loading) return <Loading size={loadingSize} />;
      if (error) return <ErrorHandler />;
      return <Component data={data} error={error} />;
    }}
  </Query>
);

// Test component
export const getData = ({ data, error }) => {
  return (
    <div>
      {data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>{`${currency}: ${rate}`}</p>
        </div>
      ))}
    </div>
  );
};

export default withConsumer(QueryHandler);
