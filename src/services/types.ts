import { PokemonDetail } from "./pokeapi/types";

export interface PokemonProduct extends PokemonDetail {
  price: number;
  formattedPrice: string;
}
