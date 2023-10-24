interface Character {
  name: string;
  height: string;
  mass: string;
  created: string;
  image: string;
}

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({
  character: { image, name, height, mass, created },
}: CharacterCardProps): React.ReactElement => {
  return (
    <article className="character-card">
      <img className="character-card__image" src={image} alt={name} />
      <div className="character-card-text">
        <h2 className="character-card-text__title">{name}</h2>
        <div className="card-text-block">
          <span className="card-text-block__name">{`Height: ${height}`}</span>
          <span className="card-text-block__height">{`Mass: ${mass}`}</span>
          <span className="card-text-block__mass">{`Date of Creation: ${created}`}</span>
        </div>
      </div>
    </article>
  );
};

export default CharacterCard;
