import { act, renderHook } from "@testing-library/react-hooks";
import { CartProvider, useCart } from "./CartContext";

const cacheKey = "@PokeStore:cart-fire";

jest.mock("./StoreContext", () => {
  return {
    useStore() {
      return { currentStore: "fire" };
    },
  };
});

const mockedSetItemLocalStorage = jest.spyOn(Storage.prototype, "setItem");
const initialStoragedData = [
  {
    id: "1",
    image_url: "fake.png",
    price: 179.9,
    title: "Lorem ipsum",
    quantity: 6,
  },
  {
    id: "2",
    image_url: "fake2.png",
    price: 139.9,
    title: "Dolor sit at",
    quantity: 1,
  },
];

describe("Testing CartContext", () => {
  beforeEach(() => {
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValueOnce(JSON.stringify(initialStoragedData));
  });

  it("should be able to initialize cart with localStorage value", () => {
    const { result } = renderHook(useCart, {
      wrapper: CartProvider,
    });

    expect(result.current.cartProducts).toEqual(
      expect.arrayContaining([
        {
          id: "1",
          image_url: "fake.png",
          price: 179.9,
          title: "Lorem ipsum",
          quantity: 6,
        },
        {
          id: "2",
          image_url: "fake2.png",
          price: 139.9,
          title: "Dolor sit at",
          quantity: 1,
        },
      ])
    );
  });

  it("should be able to add a new product", async () => {
    const product = {
      id: "3",
      image_url: "fake3.png",
      price: 139.9,
      title: "New product",
    };

    const { result } = renderHook(useCart, {
      wrapper: CartProvider,
    });

    act(() => {
      result.current.addToCart(product);
    });

    expect(result.current.cartProducts).toEqual(
      expect.arrayContaining([
        {
          id: "1",
          image_url: "fake.png",
          price: 179.9,
          title: "Lorem ipsum",
          quantity: 6,
        },
        {
          id: "2",
          image_url: "fake2.png",
          price: 139.9,
          title: "Dolor sit at",
          quantity: 1,
        },
        {
          id: "3",
          image_url: "fake3.png",
          price: 139.9,
          title: "New product",
          quantity: 1,
        },
      ])
    );

    expect(mockedSetItemLocalStorage).toHaveBeenCalledWith(
      cacheKey,
      JSON.stringify(result.current.cartProducts)
    );
  });

  it("should be able to increment quantity when product already in the cart", async () => {
    const product = {
      id: "2",
      image_url: "fake2.png",
      price: 139.9,
      title: "Dolor sit at",
    };

    const { result } = renderHook(useCart, {
      wrapper: CartProvider,
    });

    act(() => {
      result.current.addToCart(product);
    });

    expect(result.current.cartProducts).toEqual(
      expect.arrayContaining([
        {
          id: "1",
          image_url: "fake.png",
          price: 179.9,
          title: "Lorem ipsum",
          quantity: 6,
        },
        {
          id: "2",
          image_url: "fake2.png",
          price: 139.9,
          title: "Dolor sit at",
          quantity: 2,
        },
      ])
    );

    expect(mockedSetItemLocalStorage).toHaveBeenCalledWith(
      cacheKey,
      JSON.stringify(result.current.cartProducts)
    );
  });

  it("should be able to remove a product from cart", () => {
    const product = {
      id: "2",
      image_url: "fake2.png",
      price: 139.9,
      title: "Dolor sit at",
    };

    const { result } = renderHook(useCart, {
      wrapper: CartProvider,
    });

    act(() => {
      result.current.removeFromCart(product.id);
    });

    expect(result.current.cartProducts).toEqual(
      expect.arrayContaining([
        {
          id: "1",
          image_url: "fake.png",
          price: 179.9,
          title: "Lorem ipsum",
          quantity: 6,
        },
      ])
    );
    expect(mockedSetItemLocalStorage).toHaveBeenCalledWith(
      cacheKey,
      JSON.stringify(result.current.cartProducts)
    );
  });

  it("should be able to decrement a product quantity", async () => {
    const productId = "1";

    const { result } = renderHook(useCart, {
      wrapper: CartProvider,
    });

    act(() => {
      result.current.decrement(productId);
    });

    expect(result.current.cartProducts).toEqual(
      expect.arrayContaining([
        {
          id: "1",
          image_url: "fake.png",
          price: 179.9,
          title: "Lorem ipsum",
          quantity: 5,
        },
        {
          id: "2",
          image_url: "fake2.png",
          price: 139.9,
          title: "Dolor sit at",
          quantity: 1,
        },
      ])
    );
    expect(mockedSetItemLocalStorage).toHaveBeenCalledWith(
      cacheKey,
      JSON.stringify(result.current.cartProducts)
    );
  });

  it("should be able to remove a product from cart when quantity smaller than 1", async () => {
    const productId = "2";

    const { result, waitForValueToChange } = renderHook(useCart, {
      wrapper: CartProvider,
    });

    act(() => {
      result.current.decrement(productId);
    });

    expect(result.current.cartProducts).toEqual(
      expect.arrayContaining([
        {
          id: "1",
          image_url: "fake.png",
          price: 179.9,
          title: "Lorem ipsum",
          quantity: 6,
        },
      ])
    );
    expect(mockedSetItemLocalStorage).toHaveBeenCalled();
  });
});
