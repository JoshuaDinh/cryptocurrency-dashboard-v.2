import React, { useState, useEffect } from "react";
import "./dashboardCta.css";
import TextContent from "Components/TextContent/TextContent";
import { Line } from "react-chartjs-2";
import { DashboardCtaData } from "../../ChartData/data";
import { options } from "../../ChartData/ChartConfig";

const DashboardCta = ({ coinList }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1hr&interval=minute"
        );
        const res = await response.json();
        setData(res);
      } catch (err) {}
    }
    fetchData();
  }, []);
  return (
    <section>
      <div className="section-data">
        <div className="dashboard-cta-charts-container">
          <Line
            data={(canvas) => DashboardCtaData(canvas, data)}
            options={options}
          />
          <div className="dashboard-cta-charts-bottom"></div>
        </div>
      </div>

      <TextContent
        header="Interested in numbers?"
        context="Analyze what the market has to say about digital assets and their worth as an investment."
        title="View Dashboard"
        href="/Dashboard"
        secondaryButton
      />
    </section>
  );
};

export default DashboardCta;
