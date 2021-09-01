import { useState } from "react";
import { useRef } from "react";
import { RiSearchLine, RiCloseLine } from "react-icons/ri";
import { useTheme } from "styled-components";
import { useStore } from "../../../contexts/StoreContext";

import { SearchContainer, SearchInput } from "./styles";

interface SearchBoxProps {
  fullWidth?: boolean;
  onSearch: (search: string) => void;
}

export function SearchBox({ fullWidth = false, onSearch }: SearchBoxProps) {
  const { store } = useStore();
  const theme = useTheme();
  const searchInputRef = useRef<HTMLInputElement>();

  const [isSearching, setIsSearching] = useState(false);

  function handleSearch() {
    onSearch(searchInputRef.current.value);
    setIsSearching(true);
  }

  function handleClearSearch() {
    searchInputRef.current.value = "";
    onSearch("");
    setIsSearching(false);
  }

  return (
    <SearchContainer fullWidth={fullWidth}>
      <SearchInput
        ref={searchInputRef}
        placeholder={store.translations.header.search_placeholder}
        onKeyDown={(e) => {
          if (e.key.toLowerCase() === "enter") {
            handleSearch();
          }
        }}
        onBlur={handleSearch}
      />
      <button
        type="button"
        onClick={isSearching ? handleClearSearch : handleSearch}
      >
        {!!searchInputRef.current?.value ? (
          <RiCloseLine size={24} color={theme.color.primary} />
        ) : (
          <RiSearchLine size={24} color={theme.color.primary} />
        )}
      </button>
    </SearchContainer>
  );
}
