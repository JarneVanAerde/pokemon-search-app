import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/**
 * Inject the application into the root of index.html
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
