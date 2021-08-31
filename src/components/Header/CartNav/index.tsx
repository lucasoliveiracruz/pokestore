import { useMemo } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { useTheme } from "styled-components";
import { useCart } from "../../../contexts/CartContext";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { Tooltip } from "../../ToolTip";

import { Container } from "./styles";

export function CartNav() {
  const theme = useTheme();
  const isWideVersion = useMediaQuery("(min-width: 700px)");
  const { cartProducts, toggleCartVisible } = useCart();

  const totalItemsInCart = useMemo(() => {
    const totalItems = cartProducts.reduce(
      (acc, product) => acc + product.quantity,
      0
    );
    return totalItems;
  }, [cartProducts]);

  const tooltipTitle = useMemo(() => {
    if (totalItemsInCart === 1) return "1 item no carrinho";
    if (totalItemsInCart > 1) return `${totalItemsInCart} itens no carrinho`;
    return "Nenhum item adicionado";
  }, [totalItemsInCart]);

  return (
    <Tooltip showTooltip={isWideVersion} title={tooltipTitle}>
      <Container onClick={toggleCartVisible}>
        <RiShoppingCartLine color={theme.color.white} size="28" />
        <span>{totalItemsInCart}</span>
      </Container>
    </Tooltip>
  );
}
