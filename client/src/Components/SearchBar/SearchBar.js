import React, { useState, useEffect } from "react";
import "./searchBar.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ setSelectedCoin, coinList, selectedCoin }) => {
  const [input, setInput] = useState("");

  // Handle Inputs
  function handleInput(e) {
    setInput(e.target.value);
  }

  // Waits for user to finish typing before setting state
  useEffect(() => {
    if (input) {
      const timer = setTimeout(() => {
        setSelectedCoin(input);
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [input]);

  return (
    <div className="search-bar">
      <form className="search-bar-form frame">
        <SearchIcon className="search-bar-icon" />
        <input
          onChange={(e) => handleInput(e)}
          className="search-bar-input"
          type="text"
          placeholder="Search for a Coin.."
          value={input}
        />
      </form>
      <select
        className="search-bar-selector frame"
        onChange={(e) => setSelectedCoin(e.target.value)}
        value={selectedCoin}
      >
        {coinList.map((coin) => {
          return <option value={coin.id}>{coin.symbol?.toUpperCase()}</option>;
        })}
      </select>
    </div>
  );
};

export default SearchBar;
