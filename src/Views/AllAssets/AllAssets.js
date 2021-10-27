import React from "react";
import "./allAssets.css";
import BasicCard from "Components/BasicCard/BasicCard";
import SideNavigation from "Components/SideNavigation/SideNavigation";

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
    <div className="all-assets">
      <SideNavigation />
      <div className="all-assets-container  ">
        {renderAllDigitalAssets(coinList)}
      </div>
    </div>
  );
};

export default AllAssets;
