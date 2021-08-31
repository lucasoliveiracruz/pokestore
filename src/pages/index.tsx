import Head from "next/head";
import { Header } from "../components/Header";
import { LoadingCover } from "../components/LoadingCover";
import { ProductsList } from "../components/ProductsList";
import { useStore } from "../contexts/StoreContext";
import { useProductsList } from "../services/hooks/useProductsList";
import { Container } from "../styles/Store.styles";
import { capitalize } from "../utils/capitalize";

export default function Store() {
  const { currentStore } = useStore();
  const { products, isLoadingProducts } = useProductsList();

  return (
    <>
      <Head>
        <title>{capitalize(currentStore)} | PokeStore</title>
      </Head>
      <Container>
        <Header />
        <LoadingCover isVisible={isLoadingProducts} />
        <ProductsList products={products} />
      </Container>
    </>
  );
}
