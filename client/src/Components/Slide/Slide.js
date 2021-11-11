import React from "react";
import { format, determineColor } from "Utilities/Utilities";
import "./slide.css";

function renderSlides(coinList) {
  return coinList.map((coin) => {
    return (
      <div key={coin.id} className="slide-item">
        <img src={coin.image} alt="" className="slide-image" />
        <span>{coin.symbol.toUpperCase()}:</span>
        <span>${format(coin.current_price)}</span>
        <span className={determineColor(coin.price_change_percentage_24h)}>
          {format(coin.price_change_percentage_24h)}%
        </span>
      </div>
    );
  });
}

const Slide = ({ coinList }) => {
  return <div className="slide-container">{renderSlides(coinList)}</div>;
};

export default Slide;
