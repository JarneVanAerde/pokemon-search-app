import React from "react";
import PokemonSearch from "./components/PokemonSearch";
import "./App.scss";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <div className="App">
      <UserInfo name="John Doe" numberOfPokemons={5} />
      <PokemonSearch />
    </div>
  );
}

export default App;
