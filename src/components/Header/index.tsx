import { Logo } from "./Logo";
import { CartNav } from "./CartNav";
import { SearchBox } from "./SearchBox";

import { Container, InlineContent, Content, RightContent } from "./styles";
import { useMediaQuery } from "../../hooks/useMediaQuery";

interface HeaderProps {
  onCartClick: () => void;
}

export function Header({ onCartClick }: HeaderProps) {
  const isWideVersion = useMediaQuery("(min-width: 700px)");

  return (
    <Container>
      <Content>
        <InlineContent>
          <Logo />
          {isWideVersion && <SearchBox />}

          <RightContent>
            <CartNav onCartClick={onCartClick} />
          </RightContent>
        </InlineContent>
        {!isWideVersion && <SearchBox fullWidth />}
      </Content>
    </Container>
  );
}
