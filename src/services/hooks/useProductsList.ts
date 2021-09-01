import { useQuery } from "react-query";
import { useStore } from "../../contexts/StoreContext";
import { ProductsService } from "../service";

interface UseProductsListProps {
  search: string;
}

export function useProductsList({ search }: UseProductsListProps) {
  const { currentStore } = useStore();
  const { data, isLoading } = useQuery(["products", search], () =>
    ProductsService.getProductsList(currentStore, search)
  );

  return { products: data ?? [], isLoadingProducts: isLoading };
}
