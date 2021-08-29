import { Logo } from "./Logo";
import { CartNav } from "./CartNav";
import { SearchBox } from "./SearchBox";

import { Container, InlineContent, Content, RightContent } from "./styles";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export function Header() {
  const isWideVersion = useMediaQuery("(min-width: 700px)");

  return (
    <Container>
      <Content>
        <InlineContent>
          <Logo />
          {isWideVersion && <SearchBox />}

          <RightContent>
            <CartNav />
          </RightContent>
        </InlineContent>
        {!isWideVersion && <SearchBox fullWidth />}
      </Content>
    </Container>
  );
}
