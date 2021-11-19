import React, { useState, useEffect } from "react";
import { format } from "../../Utilities/Utilities";
import "./conversion.css";

const Conversion = ({ coinList, selectedCoin }) => {
  const [amount, setAmount] = useState(null);
  const [price, setPrice] = useState(null);
  const [usd, setUsd] = useState(null);

  useEffect(() => {
    setAmount(usd / price);
  }, [usd]);

  // useEffect(() => {
  //   for (let coin of coinList) {
  //     if (coin.id === selectedCoin) {
  //       setPrice(coin.current_price);
  //     }
  //   }
  // }, [selectedCoin]);

  // function convertCoinToUSD()
  // {
  //   ()
  // }

  function renderCoinConversion() {
    for (let coin of coinList) {
      if (selectedCoin === coin.id) {
        return (
          <>
            <h1>{coin.symbol.toUpperCase()}</h1>{" "}
            <h4>Current Price : ${format(coin.current_price)}</h4>
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
                <span>{` you recieve ${amount} ${coin.symbol?.toUpperCase()}`}</span>
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
