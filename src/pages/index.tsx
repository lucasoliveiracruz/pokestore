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

import { CartItem } from "../components/Cart/CartItem";
import { useCart } from "../contexts/CartContext";

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

        <div
          style={{
            borderColor: "blue",
            borderWidth: 1,
            borderStyle: "solid",
            padding: 24,
            borderRadius: 8,
            width: 500,
          }}
        >
          <h2>Carrinho de compras</h2>

          {cartProducts.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              onAddClick={increment}
              onRemoveClick={decrement}
            />
          ))}
        </div>

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
