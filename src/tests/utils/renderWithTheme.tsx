import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import { PokeStores } from "../../models/PokeStores";
import { getStoreTheme } from "../../styles/themes";

const store = getStoreTheme(PokeStores.FIRE);

export function renderWithTheme(component: ReactElement) {
  return render(<ThemeProvider theme={store.theme}>{component}</ThemeProvider>);
}
