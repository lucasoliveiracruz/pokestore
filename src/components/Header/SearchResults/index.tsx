import { Result } from "./styles";

interface SearchResultsProps {
  search: string;
  foundItems: boolean;
}

export function SearchResults({ search, foundItems }: SearchResultsProps) {
  if (!search.trim()) return <></>;

  if (foundItems) {
    return (
      <Result>
        Resultados para: <b>{search}</b>
      </Result>
    );
  }

  return (
    <Result>
      Nenhum item encontrado para a busca: <b> {search}</b>
    </Result>
  );
}
