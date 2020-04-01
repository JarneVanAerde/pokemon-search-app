import { Pokemon } from "./Pokemon.interface";

export interface SearchState {
    error: boolean;
    pokemon: Pokemon;
}