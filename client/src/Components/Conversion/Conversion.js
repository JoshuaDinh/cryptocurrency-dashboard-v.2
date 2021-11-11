import React, { useState, useEffect } from "react";
import { format } from "../../Utilities/Utilities";
import "./conversion.css";

const Conversion = ({ coinList, selectedCoin }) => {
  const [amount, setAmount] = useState(null);
  const [symbol, setSymbol] = useState(null);
  const [price, setPrice] = useState(null);
  const [usd, setUsd] = useState(0);
  const [conversionCoin, setConversionCoin] = useState("bitcoin");

  useEffect(() => {
    for (let coin of coinList) {
      if (coin.id === selectedCoin) {
        setPrice(coin.current_price);
        setSymbol(coin.symbol);
        setConversionCoin(coin.id);
      }
    }
  }, [selectedCoin]);

  useEffect(() => {
    setAmount(usd / price);
  }, [usd]);

  function renderCoinConversion(e) {
    console.log(coinList);
    for (let coin of coinList) {
      if (conversionCoin === coin.id) {
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
            <span>{`If you pay $${usd} `}</span>
            <span>{` you recieve ${amount} ${symbol?.toUpperCase()}`}</span>
          </>
        );
      }
    }
  }

  return (
    <div className="conversion frame">
      <select className="conversion-select">
        {coinList.map((coin) => {
          return (
            <option onChange={() => setConversionCoin(coin.id)}>
              {coin.id}
            </option>
          );
        })}
      </select>
      {renderCoinConversion()}
    </div>
  );
};

export default Conversion;
