import React, { Component, ReactElement } from "react";
import { Pokemon } from "../models/Pokemon.interface";

/**
 * This component is used to display search result form the PokemonSearch component.
 *
 * @see PokemonSearch
 */
class Result extends Component<Pokemon> {
    
  /**
   * Renders the component.
   */
  public render(): ReactElement {
    const { name, numberOfAbilities, baseExperience, imageUrl } = this.props;

    return (
      <div>
        <img src={imageUrl} alt="pokemon" className="pokemon-image"></img>
        <p>
          {name} has {numberOfAbilities} abilities and {baseExperience} base
          experience points.
        </p>
      </div>
    );
  }
}

export default Result;
