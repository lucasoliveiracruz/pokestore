import { useStore } from "../../../contexts/StoreContext";
import { capitalize } from "../../../utils/capitalize";
import { Container } from "./styled";

import Link from "next/link";

export function Logo() {
  const { store } = useStore();
  const Icon = store.config.logo;

  return (
    <Link href="/" passHref>
      <Container>
        <h1>
          <Icon size={24} /> {capitalize(store.config.name)}
        </h1>
      </Container>
    </Link>
  );
}
