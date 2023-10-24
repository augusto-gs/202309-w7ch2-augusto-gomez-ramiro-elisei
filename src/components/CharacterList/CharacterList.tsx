import { useEffect, useState } from "react";
import { Character } from "../../type";

const CharacterList = (): React.ReactElement => {
  const [list, setList] = useState<Character[]>([]);

  useEffect(() => {
    const getCharacters = async () => {
      const apiUrl = "https://swapi.dev/api/people/1";
      const response = await fetch(apiUrl);
      const characterPromise = (await response.json()) as Character[];
      setList(characterPromise);
    };
    getCharacters();
  }, []);
  return <div>{}</div>;
};

export default CharacterList;
