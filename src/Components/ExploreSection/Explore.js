import React, { useState } from "react";
import "./explore.css";
import BasicCard from "Components/BasicCard/BasicCard";
import TextContent from "Components/TextContent/TextContent";

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
    <section className="explore">
      <TextContent
        header="Explore digital assets, like Bitcoin, Ethereum and Dogecoin"
        context="& view their daily performence in the market place."
        title="See more assets"
        href="/DigitalAssets"
        secondaryButton
      />
      <div className="section-data ">
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
    </section>
  );
};

export default Explore;
