import React, { useState, useEffect } from "react";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Account from "./Views/Account/Account";
import SideNavigation from "Components/SideNavigation/SideNavigation";
import Assets from "./Views/Assets/Assets";
// import axios from "axios";

const App = () => {
  const [coinList, setCoinList] = useState([]);
  const [code, setCode] = useState("");

  // useEffect(() => {
  //   setCode(window.location.search.slice(6));
  //   const redirect = async () => {
  //     try {
  //       const res = await axios.get("/api/OAuth/Redirect");
  //     } catch (err) {
  //       alert(err);
  //     }
  //   };
  //   redirect();
  // }, []);

  useEffect(() => {
    try {
      async function fetchData() {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C1d%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y"
        );
        const data = await response.json();
        setCoinList(data);
      }
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Router>
      <div className="app">
        <SideNavigation />
        <Switch>
          <Route exact path="/User-Verified">
            <Account />
          </Route>
          <Route exact path="/">
            <Assets coinList={coinList} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
