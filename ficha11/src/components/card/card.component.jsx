import React from "react";
import "./card.css";
import {
  PLACEHOLDER_CARDBACK_PATH,
  PLACEHOLDER_CARD_PATH,
} from "../../constants";

function Card(props) {
  const { card, onClickCard, flipped, matched } = props;

  let flippedClass = flipped ? " flipped" : "";
  let matchedClass = matched ? " inative" : "";
  let cardFrontClass = matched ? " grayscale" : "";

  const handleClickCaptureCard = (event) => { 
    if (flipped) { 
      event.stopPropagation(); 
    } 
  };
  return (
    <div className={"card " + flippedClass + matchedClass} data-logo={card.name} onClick={() => { 
      onClickCard(card); 
}} onClickCapture={handleClickCaptureCard}>
      <img
        src={PLACEHOLDER_CARDBACK_PATH}
        className="card-back"
        alt="card placeholder"
      />
      <img
        src={`${PLACEHOLDER_CARD_PATH}${card.name}.png`}
        className={"card-front" + cardFrontClass}
        alt="card"
      />
    </div>
  );
}

export default Card;
