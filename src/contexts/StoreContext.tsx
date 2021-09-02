import { ReactNode, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { PokeStore, PokeStores } from "../models/PokeStores";
import { getStoreTheme } from "../styles/themes";
import { getTranslation } from "../translations";

interface StoreContextData {
  setStore: (store: PokeStores) => void;
  store: PokeStore;
  currentStore: PokeStores;
}

interface StoreProviderProps {
  store: PokeStores;
  children: ReactNode;
}

const StoreContext = createContext({} as StoreContextData);

export function StoreProvider({
  children,
  store: pokeStore,
}: StoreProviderProps) {
  const [store, setStore] = useState<PokeStore>({} as PokeStore);
  const [currentStore, setCurrentStore] = useState<PokeStores>(
    "" as PokeStores
  );

  useEffect(() => {
    changeStore(pokeStore);
  }, [pokeStore]);

  function changeStore(store: PokeStores): void {
    const { theme, translations, logo, loader } = getStoreTheme(store);

    setCurrentStore(store);
    setStore({
      theme,
      translations,
      config: { logo, loader },
    });
  }

  return (
    <StoreContext.Provider
      value={{ setStore: changeStore, store, currentStore }}
    >
      {store.theme && (
        <ThemeProvider theme={store.theme}>{children}</ThemeProvider>
      )}
    </StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext);
}
