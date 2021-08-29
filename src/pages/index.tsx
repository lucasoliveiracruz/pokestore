import { useState } from "react";
import { useEffect } from "react";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { ProductsList } from "../components/ProductsList";
import { useStore } from "../contexts/StoreContext";
import { PokeStores } from "../models/PokeStores";
import { ProductsService } from "../services";
import { PokemonProduct } from "../services/types";

import { Container } from "./styles";

function randomTheme() {
  const validStores = [PokeStores.FIRE, PokeStores.GRASS, PokeStores.WATER];
  const random = validStores[Math.floor(Math.random() * validStores.length)];
  return random;
}

export default function Home() {
  const { store, setStore } = useStore();
  const [products, setProducts] = useState<PokemonProduct[]>([]);

  useEffect(() => {
    ProductsService.getAllPokemonProductsByType(store.config.store).then(
      (response) => {
        setProducts(response);
      }
    );
  }, [store]);

  return (
    <>
      <Container>
        <Header />
        <Button onClick={() => setStore(randomTheme())}>Trocar de loja</Button>
        <ProductsList
          products={products}
          onClickItem={(item) => alert(item.name)}
        />
      </Container>
    </>
  );
}
