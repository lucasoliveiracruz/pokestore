import { CardItem } from "../components/CardItem";
import { Header } from "../components/Header";
import { useStore } from "../contexts/StoreContext";
import { PokeStores } from "../models/PokeStores";

function randomTheme() {
  const validStores = [PokeStores.FIRE, PokeStores.GRASS, PokeStores.WATER];
  const random = validStores[Math.floor(Math.random() * validStores.length)];
  return random;
}

export default function Home() {
  const { setStore } = useStore();
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <button
        type="button"
        onClick={() => {
          setStore(randomTheme());
        }}
      >
        Trocar loja
      </button>
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
        <CardItem
          item={{
            available: true,
            description: "Teste",
            id: 1,
            image:
              "https://images-americanas.b2w.io/produtos/01/00/img/3234384/0/3234384027G1.jpg",
            name: "Teste",
            price: "50,00",
          }}
        />

        <CardItem
          item={{
            available: true,
            description: "Teste",
            id: 1,
            image:
              "https://images-americanas.b2w.io/produtos/01/00/img/3234384/0/3234384027G1.jpg",
            name: "Teste",
            price: "50,00",
          }}
        />

        <CardItem
          item={{
            available: true,
            description: "Teste",
            id: 1,
            image:
              "https://images-americanas.b2w.io/produtos/01/00/img/3234384/0/3234384027G1.jpg",
            name: "Teste",
            price: "50,00",
          }}
        />

        <CardItem
          item={{
            available: true,
            description: "Teste",
            id: 1,
            image:
              "https://images-americanas.b2w.io/produtos/01/00/img/3234384/0/3234384027G1.jpg",
            name: "Teste",
            price: "50,00",
          }}
        />
      </div>
    </div>
  );
}
