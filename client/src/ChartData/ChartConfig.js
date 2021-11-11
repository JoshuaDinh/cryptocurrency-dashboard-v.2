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
  let gradient = ctx.createLinearGradient(500, 0, 200, 0);
  gradient.addColorStop(1, "  rgba(0, 38, 77, 1)  ");
  gradient.addColorStop(0, " rgba(0, 82, 162, 1)  ");
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
        borderColor: gradient,
      },
    ],
  };
};
