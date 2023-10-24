import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When you receive a Star Wars name", () => {
    test("Then it will show a Star Wars text in a heading", () => {
      const expectedMessage = "Star Wars";

      render(<App />);

      const title = screen.getByRole("heading", { name: expectedMessage });

      expect(title).toBeInTheDocument();
    });
  });
});
