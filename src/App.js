import React, { Component } from "react";
import Consumer from "./context/Consumer";

const Person = ({state}) => {
  return <p>Age: {state.age}</p>;
};

const MoarButton = ({state, actions}) => {
  return (
    <div>
      <button onClick={actions.growAYearOlder}>More age </button>
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
    );
  }
}
export default App;
