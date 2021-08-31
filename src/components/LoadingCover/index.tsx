import Image from "next/image";
import { useStore } from "../../contexts/StoreContext";

import { Container } from "./styles";

interface LoadingCoverProps {
  isVisible: boolean;
}

export function LoadingCover({ isVisible }: LoadingCoverProps) {
  const { store } = useStore();

  return (
    <Container isVisible={isVisible}>
      <Image
        width="100px"
        height="100px"
        objectFit="cover"
        src={store.config.loader ?? "/loaders/fire.gif"}
        alt="Loading"
      />
    </Container>
  );
}
