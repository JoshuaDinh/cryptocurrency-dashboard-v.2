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
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/Dashboard" className="nav-link">
          Dasboard
        </NavLink>
        <NavLink to="/" className="nav-link">
          About
        </NavLink>
        <NavLink to="/" className="nav-link">
          Learn
        </NavLink>
        <NavLink to="/" className="nav-link">
          other
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
