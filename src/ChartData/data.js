export const DashboardCtaData = (canvas, data) => {
  // Generate gradients for chart canvas
  const ctx = canvas.getContext("2d");

  let gradient = ctx.createLinearGradient(500, 0, 400, 0);
  gradient.addColorStop(1, "rgb(58, 96, 115, 0.9)");
  gradient.addColorStop(0, "rgb(22, 34, 42,0.9)");

  console.log(data.prices);
  // Creates length of time for x-axis labels (hourly format for 1day)
  let label = [];
  for (let i = 0; i < data.prices?.length; i++) {
    label.push(i);
  }

  return {
    labels: label,
    datasets: [
      {
        label: "24 hour Price (USD)",
        data: data?.prices,
        fill: true,
        borderColor: "rgb(0, 0, 0, 0.4)",
        backgroundColor: gradient,
      },
    ],
  };
};

export const LineChartData = (canvas, index, chartData) => {
  const ctx = canvas.getContext("2d");
  let gradient = ctx.createLinearGradient(500, 0, 400, 0);
  gradient.addColorStop(1, "rgb(58, 96, 115, 0.9)");
  gradient.addColorStop(0, "rgb(22, 34, 42,0.9)");

  console.log(chartData);
  let label = [];
  for (let i = 0; i < chartData[index]?.prices.length; i++) {
    label.push(i);
  }
  return {
    labels: label,
    datasets: [
      {
        label: "Price(USD)",
        data: chartData[index]?.prices,
        fill: true,
        borderColor: "rgb(0, 0, 0, 0.4)",
        backgroundColor: gradient,
      },
    ],
  };
};

export const BarChartData = (canvas, coinList) => {
  const ctx = canvas.getContext("2d");
  let gradient = ctx.createLinearGradient(0, 0, 0, 180);
  gradient.addColorStop(1, "rgb(58, 96, 115, 0.9)");
  gradient.addColorStop(0, "rgb(22, 34, 42,0.9)");

  return {
    labels: [
      coinList[0]?.name,
      coinList[1]?.name,
      coinList[2]?.name,
      coinList[3]?.name,
      coinList[4]?.name,
    ],
    datasets: [
      {
        label: "Market-Cap 24 HR Change (USD)",
        data: [
          coinList[0]?.market_cap_change_24h,
          coinList[1]?.market_cap_change_24h,
          coinList[2]?.market_cap_change_24h,
          coinList[3]?.market_cap_change_24h,
          coinList[4]?.market_cap_change_24h,
        ],
        backgroundColor: [
          gradient,
          "rgb(22, 34, 42)",
          "rgb(58, 96, 115, 0.5)",
          "rgb(58, 96, 115, 0.9)",
          "rgb(58, 96, 115, 0.9)",
          "rgb(22, 34, 42,0.9)",
        ],
        borderWidth: 1,
      },
    ],
  };
};
