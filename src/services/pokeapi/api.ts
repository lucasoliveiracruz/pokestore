import axios, { AxiosInstance } from "axios";
import {
  PokemonByTypeResponse,
  PokeApiService,
  Pokemon,
  PokemonDetail,
} from "./types";

const fallbackImage = "/fallback_image.jpeg";

export default class PokeApi implements PokeApiService {
  private static instance: PokeApi;
  private api: AxiosInstance;

  private constructor() {
    this.api = axios.create({
      baseURL: "https://pokeapi.co/api/v2",
    });
  }

  static getPokeApiClient() {
    if (!PokeApi.instance) {
      PokeApi.instance = new PokeApi();
    }
    return PokeApi.instance;
  }

  async getAllPokemonByType(type: string): Promise<Pokemon[]> {
    const response = await this.api.get(`/type/${type}`);

    return response.data.pokemon.map((poke) => ({
      url: poke.pokemon.url,
      name: poke.pokemon.name,
    }));
  }

  async getAllPokemonDetails(pokemon: Pokemon[]): Promise<PokemonDetail[]> {
    const response = await axios.all([
      ...pokemon.map((item) => axios.get(item.url)),
    ]);

    const allPokemon: PokemonDetail[] = response.flatMap((item) => {
      return {
        id: item.data.id,
        name: item.data.name,
        image_url: item.data.sprites.front_default ?? fallbackImage,
        stats: item.data.stats.map((stat) => ({
          base_stat: stat.base_stat,
          name: stat.stat.name,
        })),
      };
    });

    return allPokemon;
  }
}
