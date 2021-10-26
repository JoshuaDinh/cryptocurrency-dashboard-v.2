import React from "react";
import Link from "Components/Link/Link";
import "./hero.css";
import { format, determineColor } from "../../Utilities/Utilities";

function renderSlides(coinList) {
  return coinList.map((coin) => {
    return (
      <div className="hero-slide-item">
        <img src={coin.image} alt="" className="hero-slide-image" />
        <span>{coin.symbol.toUpperCase()}:</span>
        <span>${format(coin.current_price)}</span>
        <span className={determineColor(coin.price_change_percentage_24h)}>
          ( {format(coin.price_change_percentage_24h)}% )
        </span>
      </div>
    );
  });
}

const Hero = ({ coinList }) => {
  return (
    <>
      <div className="hero-slide-container">{renderSlides(coinList)}</div>
      <div className="hero">
        <h1>The future of money is here.. </h1>
        <h3>Explore the posibilities</h3>
        <Link title="Learn More" link="/LearnMore" />
      </div>
    </>
  );
};

export default Hero;
