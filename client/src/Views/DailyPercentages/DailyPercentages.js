import React from "react";
import "./dailyPercentages.css";
import BasicCard from "Components/BasicCard/BasicCard";

const AllAssets = ({ coinList, setSelectedCoin }) => {
  function renderAllDigitalAssets(coinList) {
    return coinList.map((coin) => {
      return (
        <BasicCard
          id={coin.id}
          name={coin.name}
          image={coin.image}
          current_price={`$${coin.current_price}`}
          percentage={coin.price_change_percentage_24h}
          operator={"+"}
          setSelectedCoin={setSelectedCoin}
        />
      );
    });
  }
  return (
    <div className="daily-percentages">{renderAllDigitalAssets(coinList)}</div>
  );
};

export default AllAssets;
