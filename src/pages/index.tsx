import Head from "next/head";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Cart } from "../components/Cart";
import { Header } from "../components/Header";
import { ProductsList } from "../components/ProductsList";
import { useCart } from "../contexts/CartContext";
import { useStore } from "../contexts/StoreContext";
import { PokeStores } from "../models/PokeStores";
import { ProductsService } from "../services";
import { PokemonProduct } from "../services/types";
import { capitalize } from "../utils/capitalize";
import { Container } from "./styles";

function randomTheme() {
  const validStores = [PokeStores.FIRE, PokeStores.GRASS, PokeStores.WATER];
  const random = validStores[Math.floor(Math.random() * validStores.length)];
  return random;
}

export default function Home() {
  const { currentStore, setStore } = useStore();
  const { addToCart } = useCart();

  const [products, setProducts] = useState<PokemonProduct[]>([]);

  useEffect(() => {
    ProductsService.getAllPokemonProductsByType(currentStore).then(
      (response) => {
        setProducts(response);
      }
    );
  }, [currentStore]);

  return (
    <>
      <Head>
        <title>{capitalize(currentStore)} | PokeStore</title>
      </Head>
      <Container>
        <Header />
        <Button onClick={() => setStore(randomTheme())}>Trocar de loja</Button>

        <Cart />

        <ProductsList
          products={products}
          onClickItem={(item) =>
            addToCart({
              id: String(item.id),
              image_url: item.image_url,
              price: item.price,
              title: item.name,
            })
          }
        />
      </Container>
    </>
  );
}
