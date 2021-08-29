import { PokeStores } from "../../models/PokeStores";

import { GiTreeBranch } from "react-icons/gi";
import { IoWaterSharp } from "react-icons/io5";
import { RiFireFill } from "react-icons/ri";

import { theme as fireTheme } from "./fire";
import { theme as waterTheme } from "./water";
import { theme as grassTheme } from "./grass";

export function getStoreTheme(store: PokeStores) {
  const translations = {
    [PokeStores.FIRE]: {
      theme: fireTheme,
      logo: RiFireFill,
    },
    [PokeStores.GRASS]: {
      theme: grassTheme,
      logo: GiTreeBranch,
    },
    [PokeStores.WATER]: {
      theme: waterTheme,
      logo: IoWaterSharp,
    },
  };

  return translations[store];
}
