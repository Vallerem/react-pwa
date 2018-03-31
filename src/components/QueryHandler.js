import React from "react";
import { Query } from "react-apollo";
import withConsumer from "context/Consumer";
import Loading from "components/Loading";
import ErrorHandler from "components/ErrorHandler";

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
      if (error) return <ErrorHandler error={error} />;
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
