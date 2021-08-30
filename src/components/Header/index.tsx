import { Logo } from "./Logo";
import { CartNav } from "./CartNav";
import { SearchBox } from "./SearchBox";

import { Container, InlineContent, RightContent } from "./styles";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useScrollOffset } from "../../hooks/useScrollOffset";

interface HeaderProps {
  onCartClick: () => void;
}

export function Header({ onCartClick }: HeaderProps) {
  const isWideVersion = useMediaQuery("(min-width: 700px)");
  const { offset } = useScrollOffset(500);

  return (
    <Container scrollOffset={offset}>
      <div>
        <InlineContent>
          <Logo />
          {isWideVersion && <SearchBox />}

          <RightContent>
            <CartNav onCartClick={onCartClick} />
          </RightContent>
        </InlineContent>
        {!isWideVersion && <SearchBox fullWidth />}
      </div>
    </Container>
  );
}
