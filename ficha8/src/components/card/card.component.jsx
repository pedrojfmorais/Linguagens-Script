import React from "react";
import "./card.css";
import { PLACEHOLDER_CARDBACK_PATH, PLACEHOLDER_CARD_PATH } from "../../constants/index"

const Card = props => {
    return (
        <div className="card" data-logo="angular">
            <img src={PLACEHOLDER_CARDBACK_PATH} className="card-back" />
            <img src={PLACEHOLDER_CARD_PATH + props.name + ".png"} className="card-front" />
        </div>
    );
}

export default Card;