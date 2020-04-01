import { Pokemon } from "./Pokemon.interface";

/**
 * The state of the search component
 * 
 * @see PokemonSearch
 */
export interface SearchState {

    /**
     * True if the search was invalid.
     */
    error: boolean;

    /**
     * The search result.
     */
    pokemon: Pokemon;
}