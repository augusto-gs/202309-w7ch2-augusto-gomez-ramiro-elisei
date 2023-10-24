import CharacterList from "../CharacterList/CharacterList";

const App = (): React.ReactElement => {
  return (
    <div className="app-container">
      <header className="main-header">
        <h1 className="main-header__title">Star Wars</h1>
      </header>
      <CharacterList />
    </div>
  );
};

export default App;
