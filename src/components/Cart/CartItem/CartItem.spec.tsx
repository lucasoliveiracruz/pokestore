import { screen } from "@testing-library/react";

import { CartItem } from ".";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { renderWithTheme } from "../../../tests/utils/renderWithTheme";

jest.mock("../../../hooks/useMediaQuery");

const useMediaQueryMock = useMediaQuery as jest.Mock;

describe("CartItem component", () => {
  it("renders correctly when is wide", async () => {
    useMediaQueryMock.mockReturnValue(true);

    renderWithTheme(
      <CartItem
        onAddClick={() => {}}
        onDecrementClick={() => {}}
        onRemoveClick={() => {}}
        product={{
          id: "",
          image_url: "",
          price: 123,
          quantity: 10,
          title: "Fake item",
        }}
      />
    );

    expect(screen.getByText("Fake item")).toBeInTheDocument();
    expect(screen.getByText("R$ 1.230,00")).toBeInTheDocument();
  });
});
