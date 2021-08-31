import { useCart } from "../../contexts/CartContext";
import { PokemonProduct } from "../../services/types";
import { Item } from "./Item";
import { Container } from "./styles";

interface ProductsListProps {
  products: PokemonProduct[];
}

export function ProductsList({ products }: ProductsListProps) {
  const { addToCart } = useCart();

  return (
    <Container>
      {products.map((item) => (
        <Item
          key={item.id}
          item={item}
          onClickItem={(item) => {
            addToCart({
              id: String(item.id),
              image_url: item.image_url,
              price: item.price,
              title: item.name,
            });
          }}
        />
      ))}
    </Container>
  );
}
