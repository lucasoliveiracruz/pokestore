import { SuccessModal } from ".";
import { renderWithTheme } from "../../tests/utils/renderWithTheme";

describe("Button component", () => {
  it("renders correctly", () => {
    const { getByText } = renderWithTheme(
      <SuccessModal isSuccessVisible toggleModalVisible={() => {}} />
    );

    expect(getByText("Uhull! Compra finalizada!")).toBeInTheDocument();
    expect(getByText("Legal!")).toBeInTheDocument();
  });
});
