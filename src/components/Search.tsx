import React, { Component, ReactElement } from "react";
import { SearchState } from "../models/SearchState.interface";
import Result from "./Result";
import { PokemonService } from "../services/PokemonService";
import "../styles/Search.scss";

/**
 * This component is used to handle the search functionality of the application.
 */
class Search extends Component<{}, SearchState> {
  
  /**
   * An instance of the pokemon service that is needed to call the API.
   */
  private readonly pokemonService: PokemonService = new PokemonService();

  /**
   * The reference to the input field used for the search.
   * This is an uncontrolled way of handeling the input event.
   */
  private pokemonRef: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);
    this.state = { error: false, fetching: false, pokemon: null };
    this.pokemonRef = React.createRef();
  }

  /**
   * Renders the component.
   */
  public render(): ReactElement {

    // Determine the markup for rendering.
    const resultMarkup = this.determineMarkup();

    // Render the component.
    return (
      <div className="search-container">
        <h1>Search for pokemons!</h1>

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
    const { error, fetching, pokemon } = this.state;

    // Determine the markup for this component based on the state.
    if (error) {
      return <p className="error">Pokemon not found, please try again</p>;
    } else if (fetching) {
      return <p>Fetching the data...</p>;
    } else if (this.state.pokemon) {
      return <Result {...pokemon} />;
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

    // If the input is falsy, then do nothing.
    if (!inputValue) {
      return;
    }

    // Clear the input field.
    this.pokemonRef.current.value = "";

    // Let the user know that the data is being fetched.
    this.setState({ fetching: true });

    // Call the API.
    this.pokemonService.getPokemon(inputValue.toLowerCase())

      // Set the component state to the requested pokemon.
      .then(pokemon => this.setState({ error: false, fetching: false, pokemon: pokemon }))

      // Set the error-state to true if something went wrong.
      .catch(() => this.setState({ error: true, fetching: false }));
  };
}

export default Search;
