import { RiShoppingCartLine } from "react-icons/ri";
import { useTheme } from "styled-components";

import { NavContainer } from "./styles";

export function CartNav() {
  const theme = useTheme();

  return (
    <NavContainer>
      <RiShoppingCartLine color={theme.color.white} size="28" />
    </NavContainer>
  );
}
