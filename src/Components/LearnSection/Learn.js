import React from "react";
import "./learn.css";
import Link from "Components/Link/Link";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import SecurityIcon from "@mui/icons-material/Security";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import BackupIcon from "@mui/icons-material/Backup";

const Learn = () => {
  return (
    <div className="learn">
      <div className="learn-left">
        <div className="learn-circle-main">
          <ImportantDevicesIcon className="learn-icon" />
          <SecurityIcon className="learn-icon" />
          <VpnLockIcon className="learn-icon" />
          <BackupIcon className="learn-icon" />
        </div>
        <span className="ripple"></span>
      </div>
      <div className="learn-right">
        <h1>Take the time to educate</h1>
        <h2>
          & learn about the innovative technologies that power their
          infastructure
        </h2>
        <Link title="Learn" link="/LearnMore" dark />
      </div>
    </div>
  );
};

export default Learn;
