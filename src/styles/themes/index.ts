import { PokeStores } from "../../models/PokeStores";

import { theme as fireTheme } from "./fire";
import { theme as waterTheme } from "./water";
import { theme as grassTheme } from "./grass";

export function getStoreTheme(store: PokeStores) {
  const translations = {
    [PokeStores.FIRE]: fireTheme,
    [PokeStores.GRASS]: grassTheme,
    [PokeStores.WATER]: waterTheme,
  };

  return translations[store];
}
