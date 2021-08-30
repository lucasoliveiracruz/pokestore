import { useMemo } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { useTheme } from "styled-components";
import { useCart } from "../../../contexts/CartContext";

import { Container } from "./styles";

interface CartNavProps {
  onCartClick: () => void;
}

export function CartNav({ onCartClick }: CartNavProps) {
  const theme = useTheme();
  const { cartProducts } = useCart();

  const totalItemsInCart = useMemo(() => {
    const totalItems = cartProducts.reduce(
      (acc, product) => acc + product.quantity,
      0
    );

    return totalItems;
  }, [cartProducts]);

  return (
    <Container onClick={onCartClick}>
      <RiShoppingCartLine color={theme.color.white} size="28" />
      <span>{totalItemsInCart}</span>
    </Container>
  );
}
