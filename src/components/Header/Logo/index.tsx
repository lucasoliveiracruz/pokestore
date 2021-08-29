import { RiFireFill } from "react-icons/ri";
import { IoWaterSharp } from "react-icons/io5";
import { GiTreeBranch } from "react-icons/gi";
import { useStore } from "../../../contexts/StoreContext";
import { capitalize } from "../../../utils/capitalize";
import { Container } from "./styled";
import { PokeStores } from "../../../models/PokeStores";

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
        {capitalize(store.config.name)} <Icon size={24} />
      </h1>
      <span>PokeStore</span>
    </Container>
  );
}
