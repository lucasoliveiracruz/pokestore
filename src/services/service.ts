import PokeApi from "./pokeapi/api";
import { createProductsFromPokemonList } from "./factory";
import { PokemonProduct } from "./types";
import { filterArray } from "../utils/filterArray";

const client = PokeApi.getPokeApiClient();

export class ProductsService {
  private static productsList: PokemonProduct[];

  static async getAllPokemonProductsByType(type: string) {
    const pokemonByType = await client.getAllPokemonByType(type);
    const pokemonWithDetails = await client.getAllPokemonDetails(pokemonByType);
    const products = createProductsFromPokemonList(pokemonWithDetails);
    return products;
  }

  static async getProductsList(type: string, search: string) {
    ProductsService.productsList =
      await ProductsService.getAllPokemonProductsByType(type);

    return filterArray(ProductsService.productsList, "name", search);
  }
}
