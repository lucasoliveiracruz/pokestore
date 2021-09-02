import { act, renderHook } from "@testing-library/react-hooks";
import { IoWaterSharp } from "react-icons/io5";
import { RiFireFill } from "react-icons/ri";
import { PokeStores } from "../models/PokeStores";
import { getStoreTheme } from "../styles/themes";
import { StoreProvider, useStore } from "./StoreContext";

const fire = getStoreTheme(PokeStores.FIRE);
const water = getStoreTheme(PokeStores.WATER);
const grass = getStoreTheme(PokeStores.GRASS);

describe("Testing StoreContext", () => {
  it("should be able to initialize store with fire theme", () => {
    const { result } = renderHook(useStore, {
      wrapper: StoreProvider,
      initialProps: {
        store: PokeStores.FIRE,
      },
    });

    expect(result.current.currentStore).toBe(PokeStores.FIRE);
    expect(result.current.store).toEqual(
      expect.objectContaining({
        theme: fire.theme,
        translations: fire.translations,
        config: {
          logo: RiFireFill,
          loader: "/loaders/fire.gif",
        },
      })
    );
  });

  it("should be able to change store to Water theme", () => {
    const { result } = renderHook(useStore, {
      wrapper: StoreProvider,
      initialProps: {
        store: PokeStores.FIRE,
      },
    });

    act(() => {
      result.current.setStore(PokeStores.WATER);
    });

    expect(result.current.currentStore).toBe(PokeStores.WATER);
    expect(result.current.store).toEqual(
      expect.objectContaining({
        theme: water.theme,
        translations: water.translations,
        config: {
          logo: IoWaterSharp,
          loader: "/loaders/water.gif",
        },
      })
    );
  });
});
