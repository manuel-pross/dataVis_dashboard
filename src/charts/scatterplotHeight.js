import { Chart } from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";

import { regressionLinear } from "d3-regression";
import { fetchedPokemon } from "../data";

import { fontSizeLabel, fontSizeTitleHeading } from "../chartStyles";

import { calculateRegression } from "../utils";
import { getStatRankingColor, highlightBarChart } from "./scatterplotWeight";

export const allPokemonNames = [];

const ctx = document.getElementById("scatterplotHeight");
export let publicScatterHeight = null;
Chart.register(zoomPlugin);

const config = {
  type: "scatter",
  data: null,
  options: {
    plugins: {
      title: {
        display: true,
        text: "Höhe zu Basiswertsumme",
        font: {
          size: fontSizeTitleHeading,
        },
      },
      legend: {
        labels: {
          font: {
            size: fontSizeLabel,
          },
        },
      },
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
          font: {
            size: fontSizeLabel,
          },
        },
        type: "linear",
        position: "bottom",
      },
      y: {
        title: {
          display: true,
          text: "Basiswertsumme",
          font: {
            size: fontSizeLabel,
          },
        },
        max: 900,
        min: 150,
      },
    },
    onClick: (event, elements) => {
      highlightBarChart(elements);
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
        backgroundColor: "green",
        borderColor: "green",
        pointRadius: 0,
      },
      {
        type: "scatter",
        label: "Pokémon",
        labels: allPokemonNames,
        data: heightBaseStats,
        pointBackgroundColor: Array(allPokemonNames.length).fill("black"),
      },
    ],
  };
}

export function createScatterPlotHeight(data) {
  prepareScatterData(data);
  publicScatterHeight = new Chart(ctx, config);
}
