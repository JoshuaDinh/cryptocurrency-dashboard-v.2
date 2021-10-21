import React from "react";
import "./navigation.css";
import Logo from "../../images/icon.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-logo">
        <img src={Logo} alt="" className="logo" />
      </div>
      <div className="nav-link-container">
        <NavLink
          activeClassName="nav-link-active"
          exact
          to="/"
          className="nav-link"
        >
          Home
        </NavLink>
        <NavLink
          activeClassName="nav-link-active"
          to="/Dashboard"
          className="nav-link"
        >
          Dashboard
        </NavLink>
        <NavLink
          activeClassName="nav-link-active"
          to="/DigitalAssets"
          className="nav-link"
        >
          Assets
        </NavLink>
        <NavLink
          activeClassName="nav-link-active"
          to="/LearnMore"
          className="nav-link"
        >
          Learn
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
