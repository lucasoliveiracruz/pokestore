import { StoreProvider } from "../contexts/StoreContext";
import { PokeStores } from "../models/PokeStores";
import GlobalStyles from "../styles/global";

export default function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={PokeStores.GRASS}>
      <Component {...pageProps} />
      <GlobalStyles />
    </StoreProvider>
  );
}
