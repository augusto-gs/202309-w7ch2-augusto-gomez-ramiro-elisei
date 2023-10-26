import CharacterCard from "./CharacterCard";
import { render, screen } from "@testing-library/react";

describe("Given a CharacterCard component", () => {
  describe("When it receives a Luke's information", () => {
    test("Then it shows its name on a2q heading", () => {
      const characterData = {
        name: "Luke",
        height: "",
        created: "",
        mass: "",
        image: "",
      };

      render(
        <CharacterCard
          decreaseMassFunction={() => {}}
          increaseMassFunction={() => {}}
          character={characterData}
          image={9}
        />,
      );

      const title = screen.getByRole("heading", { name: characterData.name });

      expect(title).toBeInTheDocument();
    });
  });
  describe("when it receives the character data and picture url", () => {
    test("Then it should show the picture of the character", () => {
      const characterAlt = {
        name: "Leia",
        height: "",
        created: "",
        mass: "",
      };

      const imageId = 1;

      const imgUrl = `https://starwars-visualguide.com/assets/img/characters/${imageId}.jpg`;

      render(
        <CharacterCard
          increaseMassFunction={() => {}}
          decreaseMassFunction={() => {}}
          image={imageId}
          character={characterAlt}
        />,
      );

      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("src", imgUrl);
      expect(image).toHaveAttribute("alt", characterAlt.name);
    });
  });
});
