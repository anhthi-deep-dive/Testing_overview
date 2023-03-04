import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { WaitFor } from "../WaitFor";

describe("WaitFor component", () => {
  it("should render correctly", async () => {
    render(<WaitFor />);

    act(() => {
      const getDataButton = screen.getByTestId("get-data-button");
      getDataButton.click();
    });

    await waitFor(
      () => {
        expect(screen.getByTestId("result")).toBeInTheDocument();
      },
      {
        timeout: 4000, // response time of fakeCall is
      }
    );
  });
});
