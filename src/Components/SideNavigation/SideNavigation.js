import React from "react";
import "./sideNavigation.css";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const SideNavigation = () => {
  return (
    <nav className="side-nav">
      <div className="side-nav-container">
        <NavLink
          activeClassName="side-nav-active"
          to="/"
          className="side-nav-link"
        >
          Search
          <SearchIcon className="search-bar-icon" />
        </NavLink>
      </div>
    </nav>
  );
};

export default SideNavigation;
