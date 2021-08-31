import { getTranslation } from "../../translations";
import { PokeStores } from "../../models/PokeStores";

import { GiTreeBranch } from "react-icons/gi";
import { IoWaterSharp } from "react-icons/io5";
import { RiFireFill } from "react-icons/ri";

import { theme as fireTheme } from "./fire";
import { theme as waterTheme } from "./water";
import { theme as grassTheme } from "./grass";

export function getStoreTheme(store: PokeStores) {
  const storeTranslations = getTranslation(store);
  const storeConfig = {
    [PokeStores.FIRE]: {
      theme: fireTheme,
      logo: RiFireFill,
      translations: storeTranslations,
      loader: "/loaders/fire.gif",
    },
    [PokeStores.GRASS]: {
      theme: grassTheme,
      logo: GiTreeBranch,
      translations: storeTranslations,
      loader: "/loaders/grass.gif",
    },
    [PokeStores.WATER]: {
      theme: waterTheme,
      logo: IoWaterSharp,
      translations: storeTranslations,
      loader: "/loaders/water.gif",
    },
  };

  return storeConfig[store];
}
