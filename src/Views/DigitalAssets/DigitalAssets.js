import React from "react";
import "./digitalAssets.css";
import Navigation from "Components/Navigation/Navigation";
import BasicCard from "Components/BasicCard/BasicCard";

const DigitalAssets = ({ coinList }) => {
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
    <div className="digitalAssets">
      <Navigation />
      <div className="digitalAssetsContainer">
        {renderAllDigitalAssets(coinList)}
      </div>
    </div>
  );
};

export default DigitalAssets;
