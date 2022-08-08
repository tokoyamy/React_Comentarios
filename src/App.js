import React from "react";
import "./App.css";
import Comentario from "./components/Comentario";

function App() {
  return (
    <div className="App">
      <h1>Meu primeiro projeto</h1>
      <Comentario
        nome="Matheus"
        email="math@gmail.com"
        data={new Date(2021, 8, 19)}
      >
        Olá, tudo bem?
      </Comentario>
      <Comentario
        nome="Test"
        email="test@gmail.com"
        data={new Date(2021, 8, 20)}
      >
        Olá, tudo bem e você?
      </Comentario>
    </div>
  );
}

export default App;
