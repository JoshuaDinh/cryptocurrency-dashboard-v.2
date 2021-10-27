import React, { useState, useEffect } from "react";
import "./searchBar.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ setSelectedCoin }) => {
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
      }, 1300);
      return () => clearTimeout(timer);
    }
  }, [input]);

  return (
    <div className="search-bar">
      <form className="search-bar-form">
        <SearchIcon className="search-bar-icon" />
        <input
          onChange={(e) => handleInput(e)}
          className="search-bar-input"
          type="text"
          placeholder="Search for a Coin.."
          value={input}
        />
      </form>
    </div>
  );
};

export default SearchBar;
