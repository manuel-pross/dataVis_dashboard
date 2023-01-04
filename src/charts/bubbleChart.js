import { Chart } from "chart.js/auto";
import { typeCombinations } from "../data";

const ctx = document.getElementById("bubbleChart");

const config = {
  type: "bubble",
  data: null,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bubble Chart",
      },
    },
  },
};

function calculateResistences(data) {}

export function prepareBubbleChartdata(data) {
  calculateResistences(data);
}

export function createBubbleChart(data) {
  prepareBubbleChartdata(data);
  new Chart(ctx, config);
}
