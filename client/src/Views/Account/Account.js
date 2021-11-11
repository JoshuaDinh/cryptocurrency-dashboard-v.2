import Transactions from "Components/Transactions/Transactions";
import React, { useState, useEffect } from "react";
import "./account.css";

const Account = () => {
  return (
    <div className="account">
      <Transactions />
    </div>
  );
};

export default Account;
