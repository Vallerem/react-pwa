import React from "react";
import { Loader } from "semantic-ui-react";

const Loading = ({ size }) => (
  <div>
    <Loader active size={size} />
  </div>
);

export default Loading;
