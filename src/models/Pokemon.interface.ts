/**
 * The shape of a pokemon that is fetched from the pokemon API.
 */
export interface Pokemon {

    /**
     * The name of the pokemon.
     */
    name: string;

    /**
     * The number of abilties.
     */
    numberOfAbilities: number;

    /**
     * The base experience of the pokemon.
     */
    baseExperience: number;

    /**
     * The image of the pokemon as a sprite.
     */
    imageUrl: string;
}