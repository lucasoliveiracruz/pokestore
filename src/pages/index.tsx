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

import { useCart } from "../contexts/CartContext";
import { Cart } from "../components/Cart";

function randomTheme() {
  const validStores = [PokeStores.FIRE, PokeStores.GRASS, PokeStores.WATER];
  const random = validStores[Math.floor(Math.random() * validStores.length)];
  return random;
}

export default function Home() {
  const { currentStore, setStore } = useStore();
  const { cartProducts, increment, decrement, addToCart } = useCart();

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
