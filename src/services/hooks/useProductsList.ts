import { useQuery } from "react-query";
import { useStore } from "../../contexts/StoreContext";
import { ProductsService } from "../service";

export function useProductsList() {
  const { currentStore } = useStore();
  const { data, isLoading } = useQuery(["products"], () =>
    ProductsService.getAllPokemonProductsByType(currentStore)
  );

  return { products: data ?? [], isLoadingProducts: isLoading };
}
