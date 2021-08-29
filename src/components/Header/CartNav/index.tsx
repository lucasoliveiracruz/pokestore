import { RiShoppingCartLine } from "react-icons/ri";
import { useTheme } from "styled-components";
import { useCart } from "../../../contexts/CartContext";

import { NavContainer } from "./styles";

export function CartNav() {
  const theme = useTheme();
  const { cartProducts } = useCart();

  function getCounter() {
    return cartProducts?.length > 9 ? "+9" : cartProducts?.length ?? 0;
  }

  return (
    <NavContainer>
      <RiShoppingCartLine color={theme.color.white} size="28" />
      <span>{getCounter()}</span>
    </NavContainer>
  );
}
