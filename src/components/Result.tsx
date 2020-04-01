import React, { Component, ReactElement } from "react";
import { Pokemon } from "../models/Pokemon.interface";
import "../styles/Result.scss";

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
      <div className="result-container">
        <img src={imageUrl} alt="pokemon" className="result-image"></img>
        <p className="result-information">
          <span>Name: {name}</span>
          <span>Number of abiltities: {numberOfAbilities}</span>
          <span>Base experience: {baseExperience}</span>
        </p>
      </div>
    );
  }
}

export default Result;
