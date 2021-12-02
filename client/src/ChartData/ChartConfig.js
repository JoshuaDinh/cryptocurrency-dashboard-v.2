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
      font: { size: 16 },
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

  let gradient = ctx.createLinearGradient(500, 0, 200, 0);
  gradient.addColorStop(1, "rgba(0, 82, 162, 0.75)");
  gradient.addColorStop(0, "rgba(0, 38, 77, 1)");

  return {
    labels: [
      coinList[0]?.symbol.toUpperCase(),
      coinList[1]?.symbol.toUpperCase(),
      coinList[2]?.symbol.toUpperCase(),
      coinList[3]?.symbol.toUpperCase(),
      coinList[4]?.symbol.toUpperCase(),
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
          "rgba(2, 56, 110, 1)",
          "rgba(0, 38, 77, 1)",
          "rgba(0, 23, 45, 1)",
          "rgba(0, 82, 162,1)",
        ],
        borderWidth: 1,
      },
    ],
  };
};

export const PieOptions = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Top 5 by Volume",
      font: { size: 16 },
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

export const PieData = (canvas, coinList) => {
  const ctx = canvas.getContext("2d");
  let gradient = ctx.createLinearGradient(500, 0, 200, 0);
  gradient.addColorStop(1, "rgba(0, 82, 162, 0.75)");
  gradient.addColorStop(0, "rgba(0, 38, 77, 1)");

  // Sorts Array by Volume
  const sortedArray = [...coinList];
  sortedArray.sort((a, b) => {
    return b.total_volume - a.total_volume;
  });

  // Removes first 5 tokens from sorted array
  let sortedData = [];
  sortedArray.slice(0, 5).map((coin) => {
    return sortedData.push(coin);
  });

  return {
    labels: [
      sortedData[0]?.symbol.toUpperCase(),
      sortedData[1]?.symbol.toUpperCase(),
      sortedData[2]?.symbol.toUpperCase(),
      sortedData[3]?.symbol.toUpperCase(),
      sortedData[4]?.symbol.toUpperCase(),
    ],
    datasets: [
      {
        data: [
          sortedData[0]?.total_volume,
          sortedData[1]?.total_volume,
          sortedData[2]?.total_volume,
          sortedData[3]?.total_volume,
          sortedData[4]?.total_volume,
        ],
        backgroundColor: [
          gradient,
          "rgba(2, 56, 110, 1)",
          "rgba(0, 38, 77, 1)",
          "rgba(0, 23, 45, 1)",
          "rgba(0, 82, 162,1)",
        ],
      },
    ],
  };
};

export const BarChartData = (canvas, coinList) => {
  const ctx = canvas.getContext("2d");
  let gradient = ctx.createLinearGradient(500, 0, 200, 0);
  gradient.addColorStop(1, "rgba(0, 82, 162, 0.75)");
  gradient.addColorStop(0, "rgba(0, 38, 77, 1)");

  // Sorts Array by Volume
  const sortedArray = [...coinList];
  sortedArray.sort((a, b) => {
    return b.price_change_percentage_24h - a.price_change_percentage_24h;
  });

  // Removes first 5 tokens from sorted array
  let sortedData = [];
  sortedArray.slice(0, 5).map((coin) => {
    return sortedData.push(coin);
  });

  return {
    labels: [
      sortedData[0]?.name,
      sortedData[1]?.name,
      sortedData[2]?.name,
      sortedData[3]?.name,
      sortedData[4]?.name,
    ],
    datasets: [
      {
        data: [
          sortedData[0]?.price_change_percentage_24h,
          sortedData[1]?.price_change_percentage_24h,
          sortedData[2]?.price_change_percentage_24h,
          sortedData[3]?.price_change_percentage_24h,
          sortedData[4]?.price_change_percentage_24h,
        ],
        backgroundColor: [
          gradient,
          "rgba(2, 56, 110, 1)",
          "rgba(0, 38, 77, 1)",
          "rgba(0, 23, 45, 1)",
          "rgba(0, 82, 162,1)",
        ],
      },
    ],
  };
};

export const BarChartOptions = {
  plugins: {
    title: {
      display: true,
      text: "Top 5 by 24hr Price Change %",
      font: { size: 16 },
    },
    legend: {
      display: false,
    },
  },
};
