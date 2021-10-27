import React from "react";
import "./sideNavigation.css";
import { NavLink } from "react-router-dom";

const SideNavigation = () => {
  return (
    <nav className="side-nav">
      <div className="side-nav-container">
        <NavLink to="/" className="side-nav-link">
          Home
        </NavLink>
        <NavLink
          activeClassName="side-nav-active"
          to="/Search"
          className="side-nav-link"
        >
          Search
        </NavLink>
        <NavLink to="/MarketCap" className="side-nav-link">
          Market Cap
        </NavLink>
        <NavLink to="/AllAssets" className="side-nav-link">
          Assets
        </NavLink>
        <NavLink to="/LearnMore" className="side-nav-link">
          Learn
        </NavLink>
      </div>
    </nav>
  );
};

export default SideNavigation;
