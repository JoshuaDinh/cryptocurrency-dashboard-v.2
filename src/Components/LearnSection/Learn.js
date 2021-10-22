import React from "react";
import "./learn.css";
import TextContent from "Components/TextContent/TextContent";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import SecurityIcon from "@mui/icons-material/Security";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import BackupIcon from "@mui/icons-material/Backup";

const Learn = ({ coinList }) => {
  return (
    <section className="learn-section">
      <div className="section-data">
        <div className="learn-section-container">
          <div className="learn-circle-main">
            <ImportantDevicesIcon className="learn-icon" />
            <SecurityIcon className="learn-icon" />
            <VpnLockIcon className="learn-icon" />
            <BackupIcon className="learn-icon" />
          </div>
        </div>
      </div>
      <TextContent
        header="Take the time to educate"
        context=" & learn about the innovative technologies that power their
        infastructure"
        title="Learn More"
        href="/LearnMore"
      />
    </section>
  );
};

export default Learn;

{
  /* <div className="learn">
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
  <Link title="Learn More" link="/LearnMore" />
</div>
</div> */
}
