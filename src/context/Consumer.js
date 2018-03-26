import MyContext from "./Context";
import React from "react";

const childWithProps = (props, state, actions) =>
  React.Children.map(props.children, child => {
    return React.cloneElement(child, { state, actions });
  });

const Consumer = props => {
  return (
    <MyContext.Consumer>
      {({ state, actions }) => childWithProps(props, state, actions)}
    </MyContext.Consumer>
  );
};

export default Consumer;
