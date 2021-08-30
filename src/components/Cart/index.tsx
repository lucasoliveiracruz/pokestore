import { useCart } from "../../contexts/CartContext";
import { CartItem } from "./CartItem";

import { Container } from "./styles";

export function Cart() {
  const { cartProducts, increment, decrement, removeFromCart } = useCart();

  return (
    <Container>
      <h2>Carrinho de compras</h2>

      {cartProducts.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          onAddClick={increment}
          onDecrementClick={decrement}
          onRemoveClick={removeFromCart}
        />
      ))}
    </Container>
  );
}
