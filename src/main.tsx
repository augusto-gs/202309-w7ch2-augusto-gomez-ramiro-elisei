import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./components/App/App.css";
import "../public/styles/styles.css";
import "./components/App/App.css";
import "./components/Button/Button.css";
import "./components/CharacterCard/CharacterCard.css";
import "./components/CharacterList/CharacterList.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
