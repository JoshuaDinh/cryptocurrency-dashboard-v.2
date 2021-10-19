import React from "react";
import "./navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-logo">
        <img
          src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/krinnxb23kgp75s0jyhp"
          alt=""
          className="logo"
        />
        Blockchain
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
