import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "../components/Home";
import PokemonSearch from "../components/PokemonSearch";

/**
 * This component will be used to configure the routing in the application.
 */
export class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/search" component={PokemonSearch} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default Routes;
