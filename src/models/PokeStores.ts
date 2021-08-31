import { IconType } from "react-icons/lib";
import { DefaultTheme } from "styled-components";
import DefaultTranslations from "../translations/types";

export enum PokeStores {
  GRASS = "grass",
  FIRE = "fire",
  WATER = "water",
}

export interface PokeStoreConfig {
  name: string;
  logo: IconType;
  loader: string;
}

export interface PokeStore {
  theme: DefaultTheme;
  translations: DefaultTranslations;
  config: PokeStoreConfig;
}
