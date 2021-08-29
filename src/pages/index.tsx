import { useState } from "react";
import { useEffect } from "react";
import { useTheme } from "styled-components";
import { CardItem } from "../components/CardItem";
import { Header } from "../components/Header";
import { useStore } from "../contexts/StoreContext";
import { PokeStores } from "../models/PokeStores";
import { ProductsService } from "../services";
import { PokemonProduct } from "../services/types";

function randomTheme() {
  const validStores = [PokeStores.FIRE, PokeStores.GRASS, PokeStores.WATER];
  const random = validStores[Math.floor(Math.random() * validStores.length)];
  return random;
}

export default function Home() {
  const { store, setStore } = useStore();
  const theme = useTheme();

  const [items, setItems] = useState<PokemonProduct[]>([]);

  useEffect(() => {
    ProductsService.getAllPokemonProductsByType(store.config.store).then(
      (products) => {
        setItems(products);
      }
    );
  }, [store]);

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            maxWidth: 1480,
            width: "100%",
            marginTop: 24,
          }}
        >
          {items.map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
        </div>
        <button
          type="button"
          style={{
            paddingTop: 16,
            paddingBottom: 16,
            paddingLeft: 42,
            paddingRight: 42,
            borderRadius: 8,
            fontWeight: "bold",
            fontSize: 16,
            backgroundColor: theme.color.primary,
            border: 0,
            color: theme.color.white,
            margin: 24,
          }}
          onClick={() => {
            setStore(randomTheme());
          }}
        >
          carregar mais produtos
        </button>
      </div>
    </>
  );
}
