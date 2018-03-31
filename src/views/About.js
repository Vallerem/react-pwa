import React, { Component } from "react";
import withConsumer from "../context/Consumer";

export class About extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <p>Age: {this.props.globalState.age}</p>

      </div>
    );
  }
}

export default withConsumer(About);
