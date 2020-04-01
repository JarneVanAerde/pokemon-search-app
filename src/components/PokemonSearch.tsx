import React, { Component } from "react";
import { User } from "../models/User.interface";

export class PokemonSearch extends Component<User> {
  render() {
    const user = this.props;

    return (
      <div>
        <p>
          User {user.name} has {user.numberOfPokemons} pokemons.
        </p>
      </div>
    );
  }
}

export default PokemonSearch;
