import React from "react";
import { Query } from "react-apollo";
import withConsumer from "context/Consumer";
import Loading from "components/Loading";
import ErrorHandler from "components/ErrorHandler";

const QueryHandler = ({
  query,
  Component,
  variables,
  loadingSize,
  globalState,
  actions
}) => (
  <Query
    query={query}
    variables={variables}
    notifyOnNetworkStatusChange
    errorPolicy="all"
  >
    {({ loading, error, data, refetch, networkStatus, fetchMore, ...rest }) => {
      if (networkStatus === 4) return <Loading size={loadingSize} />;
      if (loading) return <Loading size={loadingSize} />;
      // if (error) return <ErrorHandler error={error} />;
      return (
        <Component
          data={data}
          error={error}
          refetch={refetch}
          fetchMore={fetchMore}
        />
      );
    }}
  </Query>
);

// Test component
export const getData = ({ data, error, refetch }) => {
  if (error)
    return (
      <div>
        <button onClick={() => refetch()}>Refresh Data</button>
        <ErrorHandler error={error} />
      </div>
    );
  return (
    <div>
      <button onClick={() => refetch()}>Refresh Data</button>
      {data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>{`${currency}: ${rate}`}</p>
        </div>
      ))}
    </div>
  );
};

export default withConsumer(QueryHandler);
