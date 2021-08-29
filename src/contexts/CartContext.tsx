import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { PokeStores } from "../models/PokeStores";
import { useStore } from "./StoreContext";

export interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  cartProducts: Product[];
  addToCart(item: Omit<Product, "quantity">): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext>({} as CartContext);

function getStoreCacheKey(store: PokeStores) {
  return `@PokeStore:cart-${store}`;
}

function changeProductQuantity(id: string, products: any[], quantity = 1) {
  const newProducts = [] as Product[];
  products.forEach((item) => {
    if (item.id === id) {
      item.quantity += quantity;
    }
    if (item.quantity > 0) {
      newProducts.push(item);
    }
  });
  return newProducts;
}

export function CartProvider({ children }: any) {
  const { currentStore } = useStore();

  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  useEffect(() => {
    function loadCartItemsFromLocalStorage(): void {
      const items = localStorage.getItem(getStoreCacheKey(currentStore));

      if (items && items.length > 0) {
        setCartProducts(JSON.parse(items));
      }
    }
    loadCartItemsFromLocalStorage();
  }, [currentStore]);

  useEffect(() => {
    function saveProductsOnLocalStorage(products: Product[]) {
      localStorage.setItem(
        getStoreCacheKey(currentStore),
        JSON.stringify(products)
      );
    }
    saveProductsOnLocalStorage(cartProducts);
  }, [cartProducts, currentStore]);

  const addToCart = useCallback(
    (item: Omit<Product, "quantity">) => {
      const newProducts = [...cartProducts, { ...item, quantity: 1 }];
      setCartProducts(newProducts);
    },
    [cartProducts]
  );

  const increment = useCallback(
    (id: string) => {
      const newProducts = changeProductQuantity(id, cartProducts, 1);
      setCartProducts(newProducts);
    },
    [cartProducts]
  );

  const decrement = useCallback(
    (id: string) => {
      const newProducts = changeProductQuantity(id, cartProducts, -1);
      setCartProducts(newProducts);
    },
    [cartProducts]
  );

  return (
    <CartContext.Provider
      value={{ addToCart, increment, decrement, cartProducts }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContext {
  return useContext(CartContext);
}
