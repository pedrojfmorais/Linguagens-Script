import "./assets/styles/App.css";
import React, { useState } from 'react';
import {
  ControlPanel,
  Footer,
  Header,
  GamePanel,
} from "./components";

function App() {

  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, onLevelChange] = useState("0");

  const handleGameStart = () => {
    setGameStarted(!gameStarted);
  }

  const handleLevelChange = (event) =>{
    const {value} = event.currentTarget;
    onLevelChange(value); 
  }

  return (
    <div id="container">
      <Header />
      <main className="main-content">
        <ControlPanel gameStarted={gameStarted} selectedLevel={selectedLevel} 
          onGameStarted={handleGameStart} onLevelChange={handleLevelChange} />
        <GamePanel />
      </main>
      <Footer />
    </div>
  );
}
export default App;
