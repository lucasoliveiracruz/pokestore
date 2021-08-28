import { RiSearchLine } from "react-icons/ri";
import { useStore } from "../../../contexts/StoreContext";

import { SearchContainer, SearchInput } from "./styles";

export function SearchBox() {
  const { store } = useStore();
  return (
    <SearchContainer>
      <SearchInput placeholder={store.translations.header.search_placeholder} />
      <RiSearchLine size={20} />
    </SearchContainer>
  );
}
