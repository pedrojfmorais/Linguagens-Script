import React from "react";
import "./game-panel.css";
import Card from "../card/card.component"

function GamePanel(){
    return(
        <section className="game-panel"> 
            <h3 className="sr-only">Peças do Jogo</h3> 
            <div id="game"> 
                <Card name="angular"></Card>
                <Card name="bootstrap"></Card>
                <Card name="html"></Card>
                <Card name="javascript"></Card>
                <Card name="vue"></Card>
                <Card name="svelte"></Card>
            </div>
        </section>
    );
}

export default GamePanel;