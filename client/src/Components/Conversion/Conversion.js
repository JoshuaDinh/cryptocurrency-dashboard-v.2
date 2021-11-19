import React, { useState, useEffect } from "react";
import { format } from "../../Utilities/Utilities";
import "./conversion.css";

const Conversion = ({ coinList, selectedCoin }) => {
  const [amount, setAmount] = useState(null);
  const [symbol, setSymbol] = useState(null);
  const [price, setPrice] = useState(null);
  const [usd, setUsd] = useState(null);

  console.log(selectedCoin);
  useEffect(() => {
    for (let coin of coinList) {
      if (coin.id === selectedCoin) {
        setPrice(coin.current_price);
        setSymbol(coin.symbol);
      }
    }
  }, [selectedCoin]);

  useEffect(() => {
    setAmount(usd / price);
  }, [usd]);

  function renderCoinConversion() {
    for (let coin of coinList) {
      if (selectedCoin === coin.id) {
        return (
          <>
            <h1>{coin.symbol.toUpperCase()}</h1>{" "}
            <h4>Current Price : ${format(price)}</h4>
            <img src={coin.image} alt="" className="conversion-image" />
            <input
              onChange={(e) => setUsd(e.target.value)}
              type="text"
              placeholder="Enter $ USD"
              value={usd}
            />
            {usd && (
              <>
                <span>{`If you pay $${usd} `}</span>
                <span>{` you recieve ${amount} ${symbol?.toUpperCase()}`}</span>
              </>
            )}
          </>
        );
      }
    }
  }

  return <div className="conversion frame">{renderCoinConversion()}</div>;
};

export default Conversion;
