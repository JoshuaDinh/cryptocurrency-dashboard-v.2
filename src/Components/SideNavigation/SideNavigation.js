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
          className="side-nav-link"
        >
          <DashboardIcon />
          Dashboard
        </NavLink>
        <NavLink
          activeClassName="side-nav-active"
          to="/wallets"
          className="side-nav-link"
        >
          <AccountBalanceIcon />
          Wallets
        </NavLink>
      </div>
      <a
        className="side-nav-coinbase"
        href="https://www.coinbase.com/oauth/authorize?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URL&state=SECURE_RANDOM&scope=wallet:accounts:read"
      >
        <LoginIcon />
        Log In
      </a>
    </nav>
  );
};

export default SideNavigation;
