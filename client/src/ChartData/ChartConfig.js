export const LineChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  elements: { point: { radius: 5 } },
  scales: {
    y: {
      grid: {
        display: true,
      },
      ticks: { display: true },
    },
    x: {
      beginAtZero: true,
      grid: {
        display: false,
      },
      ticks: { display: true },
    },
  },
};

export const LineChartData = (canvas, index, chartData) => {
  const ctx = canvas.getContext("2d");
  let borderGradient = ctx.createLinearGradient(500, 0, 200, 0);
  borderGradient.addColorStop(1, "  rgba(0, 38, 77, 1)  ");
  borderGradient.addColorStop(0, " rgba(0, 82, 162, 1)  ");

  let priceLabel = [];
  for (let i = 0; i < chartData[index]?.prices?.length; i++) {
    priceLabel.push(i);
  }
  return {
    labels: priceLabel,
    datasets: [
      {
        label: "Price(USD)",
        data: chartData[index]?.prices,
        borderColor: borderGradient,
        fill: false,
      },
    ],
  };
};

export const DoughnutOptions = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Top 5 by Market Cap",
    },
  },
  scales: {
    y: {
      grid: {
        display: false,
      },
      ticks: { display: false },
    },
    x: {
      beginAtZero: true,
      grid: {
        display: false,
      },
      ticks: { display: false },
    },
  },
};

export const DoughnutData = (canvas, coinList) => {
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
        data: [
          coinList[0]?.market_cap,
          coinList[1]?.market_cap,
          coinList[2]?.market_cap,
          coinList[3]?.market_cap,
          coinList[4]?.market_cap,
        ],
        backgroundColor: [
          gradient,
          "rgb(22, 34, 42)",
          "rgb(58, 96, 115, 0.5)",
          "rgb(58, 96, 115, 0.9)",
          "rgb(22, 34, 42,0.9)",
        ],
        borderWidth: 1,
      },
    ],
  };
};
