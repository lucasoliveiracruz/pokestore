import { RiSearchLine } from "react-icons/ri";
import { useTheme } from "styled-components";
import { useStore } from "../../../contexts/StoreContext";

import { SearchContainer, SearchInput } from "./styles";

export function SearchBox() {
  const { store } = useStore();
  const theme = useTheme();

  return (
    <SearchContainer>
      <SearchInput placeholder={store.translations.header.search_placeholder} />
      <RiSearchLine size={24} color={theme.color.primary} />
    </SearchContainer>
  );
}
