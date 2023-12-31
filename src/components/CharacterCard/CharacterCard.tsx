import Button from "../Button/Button";

interface Character {
  name: string;
  height: string;
  mass: string;
  created: string;
}

interface CharacterCardProps {
  character: Character;
  image: number;
  increaseMassFunction: () => void;
  decreaseMassFunction: () => void;
}

const CharacterCard = ({
  character: { name, height, mass, created },
  image,
  increaseMassFunction,
  decreaseMassFunction,
}: CharacterCardProps): React.ReactElement => {
  return (
    <article className="character-card">
      <img
        width={400}
        height={500}
        className="character-card__image"
        src={`https://starwars-visualguide.com/assets/img/characters/${image}.jpg`}
        alt={name}
      />
      <div className="character-card-text">
        <h2 className="character-card-text__title">{name}</h2>
        <div className="card-text-block">
          <span className="card-text-block__name">{`Height: ${height}`}</span>
          <span className="card-text-block__height">{`Mass: ${mass}`}</span>
          <Button
            buttonText="+"
            actionOnClick={() => {
              increaseMassFunction();
            }}
          />
          <Button
            buttonText="-"
            actionOnClick={() => {
              decreaseMassFunction();
            }}
          />
          <span className="card-text-block__mass">{`Date of Creation: ${created}`}</span>
        </div>
      </div>
    </article>
  );
};

export default CharacterCard;
