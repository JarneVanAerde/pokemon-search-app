import { Injectable } from 'react.di';
import { Pokemon } from '../models/Pokemon.interface';

/**
 * This service is responsible for fetching the pokemons from the pokemon API.
 * For more information about the api, you can go to the website.
 * 
 * @see https://pokeapi.co/
 */
@Injectable
export class PokemonService {

    /**
     * The base URL for calling the pokemon API.
     */
    private readonly BASE_URL = "https://pokeapi.co/api/v2/pokemon";

    /**
     * Fetches the requested pokemon.
     * 
     * @param name The name of the pokemon that needs to be fetched.
     */
    public getPokemon(name: string): Promise<Pokemon> {
        return new Promise<Pokemon>(async (resolve, reject) => {

            // Call the API.
            await fetch(`${this.BASE_URL}/${name}`).then(async (result) => {

                // If the status is nog 200, then reject the promise.
                if (result.status !== 200) {
                    return reject();
                }

                // Get the data from the result.
                const data = await result.json();

                // Contruct the pokemon object.
                const pokemon: Pokemon = {
                    name: data.name,
                    numberOfAbilities: data.abilities.length,
                    baseExperience: data.base_experience,
                    imageUrl: data.sprites.front_default
                }

               // Give back the result.
               return resolve(pokemon);
            });
        });
    }
}

export default PokemonService;