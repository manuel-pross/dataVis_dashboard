import { Chart } from "chart.js/auto";

import {
  fontSizeLabel2,
  fontSizeTitleHeading,
  typeCombinations,
  typesColorAmount,
} from "../data";

const ctx = document.getElementById("polar");

const cache = new Map();
let width = null;
let height = null;

function createRadialGradient3(context, c1, c2) {
  const chartArea = context.chart.chartArea;
  if (!chartArea) {
    // This case happens on initial chart load
    return;
  }

  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (width !== chartWidth || height !== chartHeight) {
    cache.clear();
  }
  let gradient = cache.get(c1 + c2);
  if (!gradient) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    const centerX = (chartArea.left + chartArea.right) / 2;
    const centerY = (chartArea.top + chartArea.bottom) / 2;
    const r = Math.min(
      (chartArea.right - chartArea.left) / 2,
      (chartArea.bottom - chartArea.top) / 2
    );
    const ctx = context.chart.ctx;
    gradient = ctx.createRadialGradient(
      centerX,
      centerY,
      0,
      centerX,
      centerY,
      r
    );
    gradient.addColorStop(0, c1);
    gradient.addColorStop(1, c2);
    cache.set(c1 + c2, gradient);
  }

  return gradient;
}

const config = {
  type: "polarArea",
  data: null,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "TypenKombinationen mit mindestens 6 Resistenzen",
        font: {
          size: fontSizeTitleHeading,
        },
      },
      legend: {
        labels: {
          font: {
            size: fontSizeLabel2,
          },
        },
      },
    },
  },
};

export function preparePolarChartdata() {
  const preparedData = { labels: [], resistences: [] };

  typeCombinations.forEach((typeCombi) => {
    if (typeCombi.amountRes > 6 && typeCombi.amountPokemon > 0) {
      preparedData.labels.push(typeCombi.name);
      preparedData.resistences.push(typeCombi.amountRes);
    }
  });

  config.data = {
    labels: preparedData.labels,
    datasets: [
      {
        label: "My First Dataset",
        data: preparedData.resistences,
        backgroundColor: function (context) {
          const typeCombi = preparedData.labels[context.index].split("/");
          const typeColor1 = typesColorAmount.find(
            (typeColor) => typeColor.name === typeCombi[0]
          );
          let typeColor2 = null;
          if (typeCombi[1]) {
            typeColor2 = typesColorAmount.find(
              (typeColor) => typeColor.name === typeCombi[1]
            );
          } else typeColor2 = typeColor1;

          return createRadialGradient3(
            context,
            typeColor1.colorRGB,
            typeColor2.colorRGB
          );
        },
      },
    ],
  };
}

export function createPolarChart() {
  preparePolarChartdata();
  new Chart(ctx, config);
}
