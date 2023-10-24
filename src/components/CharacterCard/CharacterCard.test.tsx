import CharacterCard from "./CharacterCard";
import { render, screen } from "@testing-library/react";

describe("Given a CharacterCard component", () => {
  describe("When it receives a Luke's information", () => {
    test("Then it shows its name on a heading", () => {
      const characterData = {
        name: "Luke",
        height: "",
        created: "",
        mass: "",
        image: "",
      };

      render(<CharacterCard character={characterData} image={9} />);

      const title = screen.getByRole("heading", { name: characterData.name });

      expect(title).toBeInTheDocument();
    });
  });
});
