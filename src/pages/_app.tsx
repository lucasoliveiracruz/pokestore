import { CartProvider } from "../contexts/CartContext";
import { StoreProvider } from "../contexts/StoreContext";
import { PokeStores } from "../models/PokeStores";
import GlobalStyles from "../styles/global";

export default function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={PokeStores.GRASS}>
      <CartProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </CartProvider>
    </StoreProvider>
  );
}
