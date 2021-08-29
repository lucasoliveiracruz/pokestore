import PokeApi from "./pokeapi/api";
import { createProductsFromPokemonList } from "./factory";

const client = PokeApi.getPokeApiClient();

export const ProductsService = {
  async getAllPokemonProductsByType(type: string) {
    const pokemonByType = await client.getAllPokemonByType(type);
    const pokemonWithDetails = await client.getAllPokemonDetails(pokemonByType);
    const products = createProductsFromPokemonList(pokemonWithDetails);
    return products;
  },
};
