import MyContext from "./Context";
import React from "react";

const withConsumer = Component => {
  return function ThemedComponent(props) {
    return (
      <MyContext.Consumer>
        {({ state, actions }) => (
          <Component {...props} globalState={state} actions={actions} />
        )}
      </MyContext.Consumer>
    );
  };
};

export default withConsumer;
