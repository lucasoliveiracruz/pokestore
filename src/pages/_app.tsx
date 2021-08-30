import { CartProvider } from "../contexts/CartContext";
import { StoreProvider } from "../contexts/StoreContext";
import { PokeStores } from "../models/PokeStores";
import GlobalStyles from "../styles/global";

const STORE = process.env.NEXT_PUBLIC_POKESTORE_THEME as PokeStores;

export default function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={STORE}>
      <CartProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </CartProvider>
    </StoreProvider>
  );
}
