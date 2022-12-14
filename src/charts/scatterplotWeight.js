import { Chart } from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";

import { findLineByLeastSquares, getCorrelation } from "../utils";

export const allPokemonNames = [];

const ctx = document.getElementById("scatterplotWeight");
Chart.register(zoomPlugin);

const config = {
  type: "scatter",
  data: null,
  options: {
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
        },
      },
    },
    scales: {
      x: {
        type: "linear",
        position: "bottom",
      },
      y: {
        min: 150,
      },
    },
  },
};

export function getStatRankingColor(statSum) {
  if (statSum <= 251.3) return "#FF9600";
  else if (statSum <= 251.3 * 2) return "#FFE500";
  else return "#77ef3b";
}

function prepareScatterData(data) {
  const weightBaseStats = [];
  const weightBaseStatsCorr = [[], []];

  data.forEach((el) => {
    weightBaseStats.push({
      x: parseFloat(el.weight_kg),
      y: parseInt(el.total_points),
    });
    weightBaseStatsCorr[0].push(parseFloat(el.weight_kg));
    weightBaseStatsCorr[1].push(parseInt(el.total_points));
  });

  let correlation = getCorrelation(weightBaseStatsCorr);

  // console.log(correlation);

  const valuesX = [];
  const valuesY = [];

  weightBaseStats.forEach((el) => {
    valuesX.push(el.x);
    valuesY.push(el.y);
  });

  const squares = findLineByLeastSquares(valuesX, valuesY);

  const squareX = squares[0];
  const squareY = squares[1];

  console.log(squareY[squareX.indexOf(Math.min(...squareX))]);
  console.log(squareY[squareX.indexOf(Math.max(...squareX))]);

  const endpoints = [
    {
      x: Math.min(...squareX),
      y: squareY[squareX.indexOf(Math.min(...squareX))],
    },
    {
      x: Math.max(...squareX),
      y: squareY[squareX.indexOf(Math.max(...squareX))],
    },
  ];

  data.forEach((el) => {
    allPokemonNames.push(el.name);
  });

  config.data = {
    labels: allPokemonNames,
    datasets: [
      {
        type: "line",
        label: "Korrelation",
        data: endpoints,
        fill: false,
        backgroundColor: "red",
        borderColor: "red",
        pointRadius: 0,
      },
      {
        type: "scatter",
        label: "Pokémon",
        labels: allPokemonNames,
        data: weightBaseStats,
        backgroundColor: function (ctx) {
          const color = getStatRankingColor(ctx.raw.y);
          return color;
        },
        borderColor: "transparent",
      },
    ],
  };
}

export function createScatterPlotWeight(data) {
  prepareScatterData(data);
  new Chart(ctx, config);
}
