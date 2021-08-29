import { GiTreeBranch } from "react-icons/gi";
import { IoWaterSharp } from "react-icons/io5";
import { RiFireFill } from "react-icons/ri";
import { useStore } from "../../../contexts/StoreContext";
import { PokeStores } from "../../../models/PokeStores";
import { capitalize } from "../../../utils/capitalize";
import { Container } from "./styled";

function getIcon(store: PokeStores) {
  const icons = {
    [PokeStores.FIRE]: RiFireFill,
    [PokeStores.GRASS]: GiTreeBranch,
    [PokeStores.WATER]: IoWaterSharp,
  };
  return icons[store];
}

export function Logo() {
  const { store } = useStore();
  const Icon = getIcon(store.config.store);

  return (
    <Container>
      <h1>
        <Icon size={24} /> {capitalize(store.config.name)}
      </h1>
    </Container>
  );
}
