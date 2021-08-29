import { PokemonProduct } from "../../services/types";
import { Item } from "./Item";
import { Container } from "./styles";

interface ProductsListProps {
  products: PokemonProduct[];
  onClickItem: (item: PokemonProduct) => void;
}

export function ProductsList({ products, onClickItem }: ProductsListProps) {
  return (
    <Container>
      {products.map((item) => (
        <Item key={item.id} item={item} onClickItem={onClickItem} />
      ))}
    </Container>
  );
}
