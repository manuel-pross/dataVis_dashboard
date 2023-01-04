import { Chart } from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";

import { regressionLinear } from "d3-regression";
import { fetchedPokemon } from "../data";

import { calculateRegression } from "../utils";
import { getStatRankingColor } from "./scatterplotWeight";

export const allPokemonNames = [];

const ctx = document.getElementById("scatterplotHeight");
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
        title: {
          display: true,
          text: "Hoehe in m",
        },
        type: "linear",
        position: "bottom",
      },
      y: {
        title: {
          display: true,
          text: "Basiswertsumme",
        },
        max: 900,
        min: 150,
      },
    },
  },
};

function prepareScatterData() {
  const heightBaseStats = [];
  const heightBaseStatsCorr = [[], []];

  fetchedPokemon.forEach((el) => {
    heightBaseStats.push({
      x: parseFloat(el.height_m),
      y: parseInt(el.total_points),
    });
    heightBaseStatsCorr[0].push(parseFloat(el.height_m));
    heightBaseStatsCorr[1].push(parseInt(el.total_points));
  });

  fetchedPokemon.forEach((el) => {
    allPokemonNames.push(el.name);
  });

  const valuesX = [];

  heightBaseStats.forEach((el) => {
    valuesX.push(el.x);
  });

  const linearRegressionF = regressionLinear()
    .x((d) => d.x)
    .y((d) => d.y)
    .domain([0, 20]);

  const result = linearRegressionF(heightBaseStats);

  const regression = calculateRegression(valuesX, result.a, result.b);

  config.data = {
    labels: allPokemonNames,
    datasets: [
      {
        type: "line",
        label: "Korrelation",
        data: regression,
        fill: false,
        backgroundColor: "red",
        borderColor: "red",
        pointRadius: 0,
      },
      {
        type: "scatter",
        label: "Pokémon",
        labels: allPokemonNames,
        data: heightBaseStats,
        backgroundColor: function (ctx) {
          const color = getStatRankingColor(ctx.raw.y);
          return color;
        },
        borderColor: "transparent",
      },
    ],
  };
}

export function createScatterPlotHeight(data) {
  prepareScatterData(data);
  new Chart(ctx, config);
}
