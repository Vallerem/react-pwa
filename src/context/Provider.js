import React, { Component } from "react";
import MyContext from "./Context";

const initialState = {
  name: "Manu",
  age: 27,
};

export default class Provider extends Component {
  state = initialState;
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growAYearOlder: () =>
            this.setState({
              age: this.state.age + 1
            })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
