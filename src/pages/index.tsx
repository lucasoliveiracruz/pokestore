import { useTheme } from "styled-components";
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
  const theme = useTheme();

  const items = [
    {
      available: true,
      description: "O pokémon elétrico",
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpZ3g1bkZprqHHET760R3MqBNUcz8G1OFfva7sIlj-97VNOmqSRG9t9rpF-OMApvISO7c&usqp=CAU",
      name: "Pikachu",
      price: "65,00",
    },
    {
      available: true,
      description: "Amante da natureza",
      id: 1,
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      name: "Bulbasaur",
      price: "50,00",
    },
    {
      available: true,
      description: "Vou te hipnotizar",
      id: 2,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_889552-MLB31142423193_062019-O.jpg",
      name: "Mew",
      price: "98,00",
    },
    {
      available: true,
      description: "Meu rabo pega fogo",
      id: 1,
      image:
        "https://w7.pngwing.com/pngs/156/686/png-transparent-pokemon-go-pokemon-x-and-y-ash-ketchum-charmander-pokemon-background-orange-cartoon-fictional-character.png",
      name: "Charmander",
      price: "700000,00",
    },
  ];

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
