import { useStore } from "../../../contexts/StoreContext";
import { Container } from "./styled";

export function Logo() {
  const { store } = useStore();

  return (
    <Container>
      <h1>{store.config.name}</h1>
    </Container>
  );
}
