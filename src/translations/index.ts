import { default as grassTranslations } from "./grass/ptBR";
import { default as waterTranslations } from "./water/ptBR";
import { default as fireTranslations } from "./fire/ptBR";
import { PokeStores } from "../models/PokeStores";

export function getTranslation(store: PokeStores) {
  const translations = {
    [PokeStores.FIRE]: fireTranslations,
    [PokeStores.GRASS]: grassTranslations,
    [PokeStores.WATER]: waterTranslations,
  };

  return translations[store];
}
