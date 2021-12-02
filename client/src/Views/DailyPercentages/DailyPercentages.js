import React from "react";
import "./dailyPercentages.css";
import BasicCard from "Components/BasicCard/BasicCard";

const AllAssets = ({ coinList }) => {
  function renderAllDigitalAssets(coinList) {
    return coinList.map((coin) => {
      return (
        <BasicCard
          title={coin.name}
          image={coin.image}
          current_price={`$${coin.current_price}`}
          percentage={coin.price_change_percentage_24h}
          operator={"+"}
        />
      );
    });
  }
  return (
    <div className="daily-percentages">{renderAllDigitalAssets(coinList)}</div>
  );
};

export default AllAssets;
