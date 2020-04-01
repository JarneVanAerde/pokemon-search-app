import React, { Component, ReactElement } from "react";
import PokemonSearch from "./components/PokemonSearch";
import "./App.scss";
import UserInfo from "./components/UserInfo";

/**
 * The main component.
 * This is the entry component for the whole application.
 */
export class App extends Component {

   /**
   * Renders the application.
   */
  public render(): ReactElement {
    return (
      <div className="App">
        <UserInfo name="John Doe" numberOfPokemons={5} />
        <PokemonSearch />
      </div>
    );
  }
}

export default App;
