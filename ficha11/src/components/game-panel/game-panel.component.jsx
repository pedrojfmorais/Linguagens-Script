import React, { useEffect, useState } from "react";

import "./game-panel.css";
import { Card } from "../index";

import {checkIfIsFlipped, checkIfIsMatched} from "../../helpers";

function GamePanel({ selectedLevel, cards, gameStarted, updatePoints, setGameStarted }) {

  const [ flippedCards, setFlippedCards ] = useState([]);
  const [ matchedCards, setMatchedCards ] = useState([]);

  useEffect(() => {
    if(!gameStarted){
      setFlippedCards([]);
      setMatchedCards([]);
    }
  }, [gameStarted]);

  useEffect(() => {
    if(matchedCards.length === cards.length)
      setGameStarted(false);
  }, [matchedCards]);

  useEffect(() => {
    if(gameStarted && flippedCards.length === 2)
      processMatchingCards();
  }, [flippedCards]);

  const handleClickCard = (card) => {
    if(gameStarted)
      setFlippedCards([...flippedCards, card]);
  }

  const processMatchingCards = () => { 
    const [card1, card2] = flippedCards; 
    const cardsAreEqual = card1.name === card2.name; 
    if (cardsAreEqual) { 
      setTimeout(() => { 
        updatePoints();
        setMatchedCards((previousState) => 
          [...previousState, ...flippedCards]); 
          setFlippedCards([]); 
      }, 500); 
    } else { 
      setTimeout(() => {         
        setFlippedCards([]); 
        updatePoints(false);
      }, 500); 
    } 
  };

  const gameClass =
    selectedLevel === "1"
      ? ""
      : selectedLevel === "2"
      ? "intermedio"
      : "avancado";

  return (
    <section className="game-panel">
      <h3 className="sr-only">Peças do Jogo</h3>
      <div id="game" className={gameClass}>
        {cards.map((card) => (
          <Card 
            key={card.key} 
            card={card} 
            onClickCard={handleClickCard} 
            flipped={checkIfIsFlipped(matchedCards, flippedCards,card.id)} 
            matched={checkIfIsMatched(matchedCards, card.id)} 
          />
        ))}
      </div>
    </section>
  );
}
export default GamePanel;
