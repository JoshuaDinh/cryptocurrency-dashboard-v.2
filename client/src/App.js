import React, { useState, useEffect } from "react";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Account from "./Views/Account/Account";
import SideNavigation from "Components/SideNavigation/SideNavigation";
import Assets from "./Views/Assets/Assets";
import CandleStick from "./Views/CandleStick/CandleStick";
// import axios from "axios";

const App = () => {
  const [selectedCoin, setSelectedCoin] = useState("");

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

  return (
    <Router>
      <div className="app">
        <SideNavigation />
        <Switch>
          <Route exact path="/User-Verified">
            <Account />
          </Route>
          <Route exact path="/candle-stick">
            <CandleStick
              selectedCoin={selectedCoin}
              setSelectedCoin={setSelectedCoin}
            />
          </Route>
          <Route exact path="/">
            <Assets
              selectedCoin={selectedCoin}
              setSelectedCoin={setSelectedCoin}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
