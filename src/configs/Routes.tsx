import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "../components/Home";
import Search from "../components/Search";

/**
 * This component will be used to configure the routing in the application.
 */
export class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default Routes;
