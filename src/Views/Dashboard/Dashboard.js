import React from "react";
import "./dashboard.css";
import SideNavigation from "Components/SideNavigation/SideNavigation";
import Discover from "../../Sections/Dashboard/Discover/Discover";
import MarketCap from "../../Sections/Dashboard/MarketCap/MarketCap";

const Dashboard = ({ coinList }) => {
  {
    return (
      <div className="dashboard">
        <SideNavigation />
        <div className="dashboard-content">
          <Discover coinList={coinList} />
          <MarketCap coinList={coinList} />
        </div>
      </div>
    );
  }
};

export default Dashboard;
