import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { FindBy } from "../FindBy";

describe("FindBy component", () => {
  it("should render correctly", async () => {
    render(<FindBy />);

    act(() => {
      const getDataButton = screen.getByTestId("get-data-button");
      getDataButton.click();
    });

    expect(
      await screen.findByTestId("result", {}, { timeout: 4000 })
    ).toBeInTheDocument();
  });
});
