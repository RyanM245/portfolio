import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/main.css";
import { HashRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
