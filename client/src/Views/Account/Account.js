import React, { useState, useEffect } from "react";
import Transactions from "Components/Transactions/Transactions";

import "./account.css";
import axios from "axios";

const Account = () => {
  // const [user, setUser] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       "https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20"
  //     );
  //     setUser(response.data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="account">
      <Transactions />
    </div>
  );
};

export default Account;
