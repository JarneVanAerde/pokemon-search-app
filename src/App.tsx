import React, { ReactElement } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/shared/Nav";
import Routes from "./configs/Routes";
import "./styles/App.scss";

const App = (): ReactElement => {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
