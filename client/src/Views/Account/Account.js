import React, { useState, useEffect } from "react";
import Transactions from "Components/Transactions/Transactions";

import "./account.css";
import axios from "axios";

const Account = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.coinbase.com/v2/user/");
      setUser(response.data);
    };
    fetchData();
  }, []);

  console.log(user);
  return (
    <div className="account">
      <Transactions />
    </div>
  );
};

export default Account;
