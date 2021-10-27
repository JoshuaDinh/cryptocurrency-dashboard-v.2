export const LineChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  elements: { point: { radius: 1 } },
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
        display: true,
      },
    },
  },
};

export const LineChartData = (canvas, index, chartData) => {
  const ctx = canvas.getContext("2d");
  let gradient = ctx.createLinearGradient(500, 0, 200, 0);
  gradient.addColorStop(1, "rgb(44, 62, 80)");
  gradient.addColorStop(0, "rgb(189, 195, 199)");

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
        borderColor: "rgb(219, 159, 30,0.7)",
        backgroundColor: gradient,
      },
    ],
  };
};
