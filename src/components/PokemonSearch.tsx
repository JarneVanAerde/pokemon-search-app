import React, { Component, ReactElement } from "react";
import { SearchState } from "../models/SearchState.interface";
import PokemonResult from "./PokemonResult";

/**
 * This component is used to handle the search functionality of the application.
 */
export class PokemonSearch extends Component<{}, SearchState> {
  
  /**
   * The reference to the input field used for the search.
   * This is an uncontrolled way of handeling the input event.
   */
  private pokemonRef: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);
    this.state = { error: false, pokemon: null };
    this.pokemonRef = React.createRef();
  }

  /**
   * Renders the component.
   */
  public render() {

    // Determine the markup for rendering.
    const resultMarkup = this.determineMarkup();

    // Render the component.
    return (
      <div>
        <input ref={this.pokemonRef} />
        <button onClick={this.onSearchClick} className="my-button">
          Search
        </button>

        {resultMarkup}
      </div>
    );
  }

  /**
   * Determines the markup for rendering based on the state of this component.
   *
   * @returns The corresponding HTML based on the component state.
   */
  private determineMarkup(): ReactElement {

    // Deconstruct the state of this component.
    const { error, pokemon } = this.state;

    // Determine the markup for this component based on the state.
    if (error) {
      return <p>Pokemon not found, please try again</p>;
    } else if (this.state.pokemon) {
      return <PokemonResult {...pokemon} />;
    } else {
      return <p>Type something, click search, and watch what happens!</p>;
    }
  }

  /**
   * @type EventHandler
   * Calls the pokemon API when the user clicks search.
   */
  private readonly onSearchClick = (): void => {

    // Get the value from the input reference.
    const inputValue = this.pokemonRef.current.value;

    // Call the API.
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}/`).then(result => {
      if (result.status !== 200) {
        this.setState({ error: true });
        return;
      }

      result.json().then(data => {
        this.setState({
          error: false,
          pokemon: {
            name: data.name,
            numberOfAbilities: data.abilities.length,
            baseExperience: data.base_experience,
            imageUrl: data.sprites.front_default
          }
        });
      });
    });
  };
}

export default PokemonSearch;
