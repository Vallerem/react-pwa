import React from "react";
import { Message } from "semantic-ui-react";

const ErrorHandler = ({ error }) => {
  // console.log(error.networkError);
  return (
    <div>
      <Message color="red">Error fetching the data</Message>
    </div>
  );
};

export default ErrorHandler;
