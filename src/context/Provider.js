import React, { Component } from "react";
import MyContext from "./Context";

const initialState = {
  name: "Manu",
  age: 27
};

export default class Provider extends Component {
  state = initialState;
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          actions: {
            growAYearOlder: () => {
               this.setState((prevState) => {
                //  console.log(prevState)
                return {age: prevState.age + 1}
              })
            }
          }
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
