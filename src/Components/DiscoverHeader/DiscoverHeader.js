import React from "react";
import "./discoverHeader.css";

const DiscoverHeader = () => {
  return (
    <div className="discover-header">
      <div className="discover-header-container">
        <img src="" alt="#" />
        <h2>BTC</h2>
        <h2>$45,500.00</h2>
        <span>(+1.96%)</span>
      </div>
      <div className="discover-header-container-middle">
        <h5>
          24Hr Low:
          <span className="red"> -$100.00</span>
        </h5>
        <h5>
          24Hr High: <span className="green">$200.00</span>
        </h5>
        <h5>
          ATL: <span className="red">-$100.00</span>
        </h5>
        <h5>
          ATH:<span className="green"> $200.00</span>
        </h5>
      </div>
      <p className="discover-header-updated">Last Updated at :</p>
    </div>
  );
};

export default DiscoverHeader;
