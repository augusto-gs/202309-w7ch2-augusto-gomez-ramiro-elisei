import { useEffect, useState } from "react";
import { Character } from "../../type";
import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterList = (): React.ReactElement => {
  const [list, setList] = useState<Character[]>([]);

  useEffect(() => {
    const getCharacters = async () => {
      const apiUrl =
        "https://starwars-characters-api-qcun.onrender.com/characters";
      const response = await fetch(apiUrl);
      const characterPromise = (await response.json()) as Character[];
      setList(characterPromise);
    };
    getCharacters();
  }, []);

  const increaseMass = () => {
    console.log("holis");
  };

  const decreaseMass = () => {
    console.log("holis");
  };

  return (
    <div>
      <ul className="container">
        {list.slice(0, 9).map(
          (character, position): React.ReactElement => (
            <li key={position}>
              <CharacterCard
                decreaseMassFunction={decreaseMass}
                increaseMassFunction={increaseMass}
                character={character}
                image={position + 1}
              />
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default CharacterList;
