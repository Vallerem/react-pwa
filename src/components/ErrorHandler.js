import React from "react";
import { Message } from "semantic-ui-react";

const ErrorHandler = ({ error }) => {
  return (
    <div>
      <Message color="red">Error fetching the data</Message>
    </div>
  );
};

export default ErrorHandler;
