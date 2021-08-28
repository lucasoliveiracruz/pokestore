import { DefaultTheme } from "styled-components";
import DefaultTranslations from "../translations/types";

export enum PokeStores {
  GRASS = "grass",
  FIRE = "fire",
  WATER = "water",
}

export interface PokeStoreConfig {
  name: string;
  logo: string;
  store: PokeStores;
}

export interface PokeStore {
  theme: DefaultTheme;
  translations: DefaultTranslations;
  config: PokeStoreConfig;
}
