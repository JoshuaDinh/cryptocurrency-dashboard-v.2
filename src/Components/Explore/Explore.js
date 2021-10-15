import React, { useState } from "react";
import "./explore.css";
import Link from "Components/Link/Link";
import BasicCard from "Components/BasicCard/BasicCard";

const Explore = ({ coinList }) => {
  const [toggle, setToggle] = useState("gains");

  const handleClick = (event, desc) => {
    event.preventDefault();
    setToggle(desc);
  };
  // Shallow copy of coinList
  const sortedArray = [...coinList];

  function renderGainsOrLosses(coinList) {
    if (toggle === "gains") {
      sortedArray.sort(
        (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
      );
      return sortedArray.slice(0, 6).map((coin) => {
        return (
          <BasicCard
            title={coin.name}
            image={coin.image}
            percentage={coin.price_change_percentage_24h}
            operator={"+"}
          />
        );
      });
    } else if (toggle === "losses") {
      sortedArray.sort(
        (a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h
      );
      return sortedArray.slice(0, 6).map((coin) => {
        return (
          <BasicCard
            title={coin.name}
            image={coin.image}
            percentage={coin.price_change_percentage_24h}
          />
        );
      });
    }
  }
  return (
    <div className="explore">
      <div className="explore-left">
        <h1>Explore digital assets, like Bitcoin, Ethereum and Dogecoin</h1>
        <h2>& view the statistics on their performence in the market place.</h2>
        <Link title="See more assets" link="/DigitalAssets" dark />
      </div>
      <div className="explore-right">
        <div className="explore-right-button-container">
          <button
            onClick={(event) => handleClick(event, "gains")}
            className={`explore-toggle-cards ${
              toggle === "gains" && "explore-active"
            } `}
          >
            Top Gainers
          </button>
          <button
            onClick={(event) => handleClick(event, "losses")}
            className={`explore-toggle-cards ${
              toggle === "losses" && "explore-active"
            } `}
          >
            Biggest Losses
          </button>
        </div>
        <div className="explore-card-container">
          {renderGainsOrLosses(coinList)}
        </div>
      </div>
    </div>
  );
};

export default Explore;