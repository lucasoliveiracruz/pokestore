import { Logo } from "./Logo";
import { CartNav } from "./CartNav";
import { SearchBox } from "./SearchBox";

import { Container, RightContent } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo />
      <SearchBox />

      <RightContent>
        <CartNav />
      </RightContent>
    </Container>
  );
}
