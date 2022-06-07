import React from 'react';
import { useState, useEffect } from "react";
import "./assets/styles/App.css";

import {
  ControlPanel,
  Footer,
  Header,
  GamePanel,
} from "./components";

import { CARDS_LOGOS, TIMEOUTGAME } from "./constants";
import { shuffleArray } from "./helpers";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");

  const [cards, setCards] = useState([]);
  const [timer, setTimer] = useState(TIMEOUTGAME); 
  const [totalPoints, setTotalPoints] = useState(0);

  const updatePoints = (operacaoSoma = true) => { 
    let pointsSum = totalPoints; 
 
    if (operacaoSoma) { 
      pointsSum += timer * (cards.length / 2); 
    } else { 
      pointsSum < 5 ? (pointsSum = 0) : (pointsSum -= 5); 
    } 
    setTotalPoints(pointsSum);
  }
  /**
  * When the game starts
  */
  const handleGameStart = () => {
    if (gameStarted) {
      console.log("Termina Jogo");
      setGameStarted(false);
    } else {
      console.log("Inicia Jogo");
      setGameStarted(true);
      setTotalPoints(0);
    }
  };

  /**
   * When the user selects a new level,
   * this callback function is executed
   */
  const handleLevelChange = (event) => {
    const { value } = event.currentTarget;
    setSelectedLevel(value);

    let numOfCards;
    switch (value) {
      // Level: Beginner
      case '1':
        numOfCards = 3;
        break;
      // Level: Intermediate
      case '2':
        numOfCards = 6;
        break;
      // Level: Advanced
      case '3':
        numOfCards = 10;
        break;
      default:
        numOfCards = 0;
        break;
    }

    const initialCards = shuffleArray(CARDS_LOGOS);
    const slicedInitialCards = initialCards.slice(0, numOfCards);

    // array com 2 imagens de cada tipo
    const doubledCardsObjects = [];
    slicedInitialCards.forEach((card, index) => {
      doubledCardsObjects.push({
        key: `${card}-${index}`,
        id: card,
        name: card
      });
      doubledCardsObjects.push({
        key: `${card}-${index}-clone`,
        id: `${card}-clone`,
        name: card
      });
    });
    const doubledShuffledCardsObjects = shuffleArray(doubledCardsObjects);
    setCards([...doubledShuffledCardsObjects]);
  };

  /**
     * When the component mounts,
     * we set an interval for the timer.
*/
  
  return (
    <div id="container">
      <Header />
      <main className="main-content">
        <ControlPanel
          gameStarted={gameStarted}
          onGameStart={handleGameStart}
          selectedLevel={selectedLevel}
          onLevelChange={handleLevelChange}
          setGameStarted={setGameStarted}
          setTimer={setTimer}
          totalPoints={totalPoints}
          timer={timer}
        />
         <GamePanel 
          cards={cards} 
          selectedLevel={selectedLevel} 
          gameStarted={gameStarted} 
          onGameStart={handleGameStart} 
          setGameStarted={setGameStarted}
          updatePoints={updatePoints}
        />
          
      </main>
      <Footer />
    </div>
  );
}

export default App;
// Esta linha também poderia ser eliminada
// e adefinição da funsão ser substituida 
// export default function App() {
