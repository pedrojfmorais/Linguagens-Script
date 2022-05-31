import React from "react";

import "./game-panel.css";
import { Card } from "../index";

function GamePanel(props) {
  const { cards, selectedLevel } = props;

  let gameClasse = "";

  switch (selectedLevel) {
    case '2':
      gameClasse = "intermedio";
      break;
    case '3':
      gameClasse = "avancado";
      break;
  
    default:
      gameClasse = "";
      break;
  }

  return (
    <section className="game-panel">
      <h3 className="sr-only">Peças do Jogo</h3>
      <div id="game" className={gameClasse}>
        {cards.map((card, index) => ( 
          <Card key={card.key} card={card} /> 
        ))}
      </div>
    </section>
  );
}
export default GamePanel;
