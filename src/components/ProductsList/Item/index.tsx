import React from "react";
import { RiAddLine } from "react-icons/ri";
import { PokemonProduct } from "../../../services/types";
import { Container } from "./styles";

interface ItemProps {
  item: PokemonProduct;
  onClickItem: (item: PokemonProduct) => void;
}

export function Item({ item, onClickItem }: ItemProps) {
  return (
    <Container available>
      <header>
        <img src={item.image_url} alt={item.name} />
      </header>
      <section className="body">
        <h2>{item.name}</h2>
        {/* <p>Sem descrição</p> */}
        <p className="price">
          <b>{item.formattedPrice}</b>
        </p>
      </section>
      <section className="footer">
        <span>Adicionar ao carrinho</span>
        <button
          type="button"
          className="icon"
          onClick={() => onClickItem(item)}
        >
          <RiAddLine size={24} />
        </button>
      </section>
    </Container>
  );
}
