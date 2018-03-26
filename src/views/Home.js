import React, { Component } from "react";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Home</h1>

        <p>Age: {this.props.state.age}</p>

        <div>
          <button onClick={this.props.actions.growAYearOlder}>More age </button>
        </div>
      </div>
    );
  }
}

export default Home;
