import CharacterList from "../CharacterList/CharacterList";
import Button from "../Button/Button";

const App = (): React.ReactElement => {
  return (
    <div className="app-container">
      <header className="main-header">
        <h1 className="main-header__title">Star Wars</h1>
      </header>
      <div className="buttons-container">
        <Button buttonText="reset mass" actionOnClick={() => {}} />
      </div>
      <CharacterList />
    </div>
  );
};

export default App;
