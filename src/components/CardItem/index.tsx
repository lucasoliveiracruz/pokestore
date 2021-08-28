import React from "react";

import { RiAddLine } from "react-icons/ri";
import { useTheme } from "styled-components";

import { Container } from "./styles";

interface Item {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  available: boolean;
}

interface CardItemProps {
  item: Item;
}

export function CardItem({ item }: CardItemProps) {
  const theme = useTheme();
  return (
    <Container available={item.available}>
      <header>
        <img src={item.image} alt={item.name} />
      </header>
      <section className="body">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p className="price">
          R$ <b>{item.price}</b>
        </p>
      </section>
      <section className="footer">
        <span>Adicionar ao carrinho</span>
        <button type="button" className="icon" onClick={() => alert("UHULLLL")}>
          <RiAddLine size={24} />
        </button>
      </section>
    </Container>
  );
}
