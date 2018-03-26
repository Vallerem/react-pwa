import React from "react";
import ReactDOM from "react-dom";

import "semantic-ui-css/semantic.min.css";
import "./index.css";

import Provider from "./context/Provider";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
