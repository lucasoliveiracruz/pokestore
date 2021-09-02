import { Button } from ".";
import { renderWithTheme } from "../../tests/utils/renderWithTheme";

describe("Button component", () => {
  it("renders correctly", () => {
    const { getByText } = renderWithTheme(
      <Button onClick={() => {}}>My label</Button>
    );
    expect(getByText("My label")).toBeInTheDocument();
  });
});
