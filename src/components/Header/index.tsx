import { Logo } from "./Logo";
import { CartNav } from "./CartNav";
import { SearchBox } from "./SearchBox";

import { Container, Content, RightContent } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <Logo />
        <SearchBox />

        <RightContent>
          <CartNav />
        </RightContent>
      </Content>
    </Container>
  );
}
