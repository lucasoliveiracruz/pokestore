import Head from "next/head";
import { useState } from "react";
import { Header } from "../components/Header";
import { SearchResults } from "../components/Header/SearchResults";
import { LoadingCover } from "../components/LoadingCover";
import { ProductsList } from "../components/ProductsList";
import { useStore } from "../contexts/StoreContext";
import { useProductsList } from "../services/hooks/useProductsList";
import { Container } from "../styles/Store.styles";
import { capitalize } from "../utils/capitalize";

export default function Store() {
  const [search, setSearch] = useState("");

  const { currentStore } = useStore();
  const { products, isLoadingProducts } = useProductsList({ search });

  return (
    <>
      <Head>
        <title>{capitalize(currentStore)} | PokeStore</title>
      </Head>
      <Container>
        <Header onSearch={(search) => setSearch(search)} />
        {!isLoadingProducts && (
          <SearchResults search={search} foundItems={products.length > 0} />
        )}
        <LoadingCover isVisible={isLoadingProducts} />
        <ProductsList products={products} />
      </Container>
    </>
  );
}
