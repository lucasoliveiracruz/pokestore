import { Logo } from "./Logo";
import { CartNav } from "./CartNav";
import { SearchBox } from "./SearchBox";

import { Container, InlineContent, RightContent } from "./styles";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useScrollOffset } from "../../hooks/useScrollOffset";

interface HeaderProps {
  onSearch: (search: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  const isWideVersion = useMediaQuery("(min-width: 700px)");
  const { offset } = useScrollOffset(500);

  return (
    <Container scrollOffset={offset}>
      <div>
        <InlineContent>
          <Logo />
          {isWideVersion && <SearchBox onSearch={onSearch} />}

          <RightContent>
            <CartNav />
          </RightContent>
        </InlineContent>
        {!isWideVersion && <SearchBox onSearch={onSearch} fullWidth />}
      </div>
    </Container>
  );
}
