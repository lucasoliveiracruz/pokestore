export interface Pokemon {
  url: string;
  name: string;
}

export interface PokeApiService {
  getAllPokemonByType: (type: string) => Promise<Pokemon[]>;
  getAllPokemonDetails(pokemon: Pokemon[]): Promise<PokemonDetail[]>;
}

export interface PokemonByTypeResponse {
  id: number;
  pokemon: Pokemon[];
}

export interface PokemonDetail {
  id: number;
  name: string;
  image_url: string;
  stats: {
    base_stat: number;
    name: string;
  }[];
}
