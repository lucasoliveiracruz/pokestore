import { CartProvider } from "../contexts/CartContext";
import { ModalProvider } from "../contexts/ModalContext";
import { StoreProvider } from "../contexts/StoreContext";
import { PokeStores } from "../models/PokeStores";
import GlobalStyles from "../styles/global";

const STORE = process.env.NEXT_PUBLIC_POKESTORE_THEME as PokeStores;

export default function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={STORE}>
      <ModalProvider>
        <CartProvider>
          <Component {...pageProps} />
          <GlobalStyles />
        </CartProvider>
      </ModalProvider>
    </StoreProvider>
  );
}
