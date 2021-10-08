import React, { useState, useEffect } from "react";
import "./search.css";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ setSelectedCoin }) => {
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
    <div className="search">
      <form className="search-form">
        <SearchIcon className="search-icon" />
        <input
          onChange={(e) => handleInput(e)}
          className="search-input"
          type="text"
          placeholder="Search for a Coin.."
        />
      </form>
    </div>
  );
};

export default Search;
