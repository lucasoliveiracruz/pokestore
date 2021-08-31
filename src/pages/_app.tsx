import { QueryClientProvider } from "react-query";
import { CartProvider } from "../contexts/CartContext";
import { ModalProvider } from "../contexts/ModalContext";
import { StoreProvider } from "../contexts/StoreContext";
import { PokeStores } from "../models/PokeStores";
import { queryClient } from "../services/queryClient";

import GlobalStyles from "../styles/global";

const STORE = process.env.NEXT_PUBLIC_POKESTORE_THEME as PokeStores;

export default function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider store={STORE}>
        <ModalProvider>
          <CartProvider>
            <Component {...pageProps} />
            <GlobalStyles />
          </CartProvider>
        </ModalProvider>
      </StoreProvider>
    </QueryClientProvider>
  );
}
