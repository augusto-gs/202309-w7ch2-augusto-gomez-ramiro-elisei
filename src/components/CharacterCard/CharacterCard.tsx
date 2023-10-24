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
      <div className="card-text">
        <h2 className="card-text__title">{name}</h2>
        <span className="card-text__name">{height}</span>
        <span className="card-text__height">{mass}</span>
        <span className="card-text__mass">{created}</span>
      </div>
    </article>
  );
};

export default CharacterCard;
