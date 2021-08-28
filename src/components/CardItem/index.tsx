import React from "react";

import { RiAddLine, RiSubtractLine } from "react-icons/ri";

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
        <button type="button" className="icon" onClick={() => {}}>
          <RiSubtractLine size={20} />
        </button>

        <button type="button" className="icon" onClick={() => {}}>
          <RiAddLine size={20} />
        </button>
      </section>
    </Container>
  );
}
