import { Chart } from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";

import { regressionLinear } from "d3-regression";
import { fetchedPokemon, typesColorAmount } from "../data";

import {
  calculateRegression,
  findLineByLeastSquares,
  getCorrelation,
} from "../utils";
import { publicBarChart } from "./stackedBarchart";

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
        title: {
          display: true,
          text: "Gewicht in kg",
        },
        type: "linear",
        position: "bottom",
      },
      y: {
        title: {
          display: true,
          text: "Basiswertsumme",
        },
        display: true,
        min: 150,
      },
    },
    onClick: (event, elements) => {
      highlightBarChart(elements);
    },
  },
};

export function highlightBarChart(elements) {
  let firstType = null;
  let secondType = null;

  publicBarChart.data.datasets[0].borderColor = () => {
    return "#808080";
  };
  publicBarChart.data.datasets[1].borderColor = () => {
    return "#808080";
  };

  publicBarChart.update();

  if (elements[0]) {
    const pokemon = fetchedPokemon[elements[0].index];
    firstType = pokemon.type_1;

    if (pokemon.type_2) {
      secondType = pokemon.type_2;
    }
  }

  publicBarChart.data.datasets[0].borderColor = (e) => {
    const foundFirstType = typesColorAmount.find(
      (typeAmount, i) =>
        typeAmount.name === firstType &&
        typeAmount.amountFirstType === e.raw &&
        i === e.index
    );
    if (foundFirstType) return "red";
    else return "#808080";
  };

  if (secondType) {
    publicBarChart.data.datasets[1].borderColor = (e) => {
      const foundSecondType = typesColorAmount.find(
        (typeAmount, i) =>
          typeAmount.name === secondType &&
          typeAmount.amountSecondType === e.raw &&
          i === e.index
      );
      if (foundSecondType) return "red";
      else return "#808080";
    };
  }
  publicBarChart.update();
}

export function getStatRankingColor(statSum) {
  if (statSum <= 251.3) return "#FF9600";
  else if (statSum <= 251.3 * 2) return "#FFE500";
  else return "#77ef3b";
}

function prepareScatterData() {
  const weightBaseStats = [];
  const weightBaseStatsCorr = [[], []];

  fetchedPokemon.forEach((el) => {
    weightBaseStats.push({
      x: parseFloat(el.weight_kg),
      y: parseInt(el.total_points),
    });
    weightBaseStatsCorr[0].push(parseFloat(el.weight_kg));
    weightBaseStatsCorr[1].push(parseInt(el.total_points));
  });

  let correlation = getCorrelation(weightBaseStatsCorr);

  const valuesX = [];

  weightBaseStats.forEach((el) => {
    valuesX.push(el.x);
  });

  const linearRegressionF = regressionLinear()
    .x((d) => d.x)
    .y((d) => d.y)
    .domain([0, 1000]);

  const result = linearRegressionF(weightBaseStats);

  const regression = calculateRegression(valuesX, result.a, result.b);

  fetchedPokemon.forEach((el) => {
    allPokemonNames.push(el.name);
  });

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
