import React, { Component } from "react";
import Provider from "./context/Provider";
import Consumer from "./context/Consumer";

const Person = props => {
  return <p>Age: {props.context.state.age}</p>;
};

const MoarButton = props => {
  return (
    <div>
      <button onClick={props.context.growAYearOlder}>More age </button>
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider>
        <Consumer>
          <h1>
            Context API app{" "}
            <span role="img" aria-label="Happy face">
              😀
            </span>
          </h1>
          <Person />
          <MoarButton />
        </Consumer>
      </Provider>
    );
  }
}
export default App;
