import { capitalize } from "../utils/capitalize";
import { formatPrice } from "../utils/formatPrice";
import { PokemonDetail } from "./pokeapi/types";
import { PokemonProduct } from "./types";

export function createProductsFromPokemonList(
  pokemon: PokemonDetail[]
): PokemonProduct[] {
  const products: PokemonProduct[] = pokemon.map((item) => {
    const price = generatePrice();
    const formattedPrice = formatPrice(price);
    return { ...item, price, formattedPrice, name: capitalize(item.name) };
  });

  return products;
}

function generatePrice() {
  return Number((Math.random() * 100).toFixed(2));
}
