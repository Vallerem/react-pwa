import React, { Component } from "react";
import Consumer from "./context/Consumer";
import Provider from "./context/Provider";
// import Loadable from 'react-loadable'; :´(
import asyncComponent from "./components/AsyncComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

const LoadableHome = asyncComponent(() => import("./views/Home"));
const LoadableAbout = asyncComponent(() => import("./views/About"));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // <React.StrictMode>
        <Router>
          <Provider>
            <Navbar />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <div>
                    <Consumer>
                      <LoadableHome {...props} />
                    </Consumer>
                  </div>
                )}
              />
              <Route
                path="/about"
                render={props => (
                  <div>
                    <Consumer>
                      <LoadableAbout {...props} />
                    </Consumer>
                  </div>
                )}
              />
              <Route
                render={props => (
                  <div>
                    <h1>Not found... NOOO!!!!!</h1>
                  </div>
                )}
              />
            </Switch>
          </Provider>
        </Router>
      // </React.StrictMode>
    );
  }
}

export default App;
