import React from "react";
import "./sideNavigation.css";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LoginIcon from "@mui/icons-material/Login";

const SideNavigation = () => {
  return (
    <nav className="side-nav">
      <div className="side-nav-container">
        <NavLink
          activeClassName="side-nav-active"
          to="/"
          exact
          className="side-nav-link"
        >
          <DashboardIcon />
        </NavLink>
        <NavLink
          activeClassName="side-nav-active"
          to="/User-Verified"
          className="side-nav-link"
        >
          <AccountBalanceIcon />
        </NavLink>
      </div>
      <a
        className="side-nav-coinbase"
        href="http://localhost:8080/api/oAuth/redirect"
      >
        <LoginIcon />
      </a>
    </nav>
  );
};

export default SideNavigation;
