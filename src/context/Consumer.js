import MyContext from "./Context";
import React from "react";

const childWithProps = (props, context) =>
  React.Children.map(props.children, child => {
    return React.cloneElement(child, { context: context });
  });

const Consumer = props => {
  return (
    <MyContext.Consumer>
      {context => childWithProps(props, context)}
    </MyContext.Consumer>
  );
};

export default Consumer;
