import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from "react";

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, "quantity">): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CART_STORAGE = "@PokeStore:cart";

const CartContext = createContext<CartContext>({} as CartContext);

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
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    function loadCartItemsFromLocalStorage(): void {
      const items = localStorage.getItem(CART_STORAGE);

      if (items && items.length > 0) {
        setProducts(JSON.parse(items));
      }
    }
    loadCartItemsFromLocalStorage();
  }, []);

  useEffect(() => {
    function saveProductsOnLocalStorage(products: Product[]) {
      localStorage.setItem(CART_STORAGE, JSON.stringify(products));
    }
    saveProductsOnLocalStorage(products);
  }, [products]);

  const addToCart = useCallback(
    (item: Omit<Product, "quantity">) => {
      const newProducts = [...products, { ...item, quantity: 1 }];
      setProducts(newProducts);
    },
    [products]
  );

  const increment = useCallback(
    (id: string) => {
      const newProducts = changeProductQuantity(id, products, 1);
      setProducts(newProducts);
    },
    [products]
  );

  const decrement = useCallback(
    (id: string) => {
      const newProducts = changeProductQuantity(id, products, -1);
      setProducts(newProducts);
    },
    [products]
  );

  return (
    <CartContext.Provider value={{ addToCart, increment, decrement, products }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContext {
  return useContext(CartContext);
}
