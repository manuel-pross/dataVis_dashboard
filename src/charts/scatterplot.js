import { Chart } from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";

import { getCorrelation } from "../utils";

export const allPokemonNames = [];

const ctx = document.getElementById("scatterplot");
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
        min: 160,
      },
    },
  },
};

function getStatRankingColor(statSum) {
  if (statSum <= 251.3) return "#FF9600"; //orange #FF9600
  else if (statSum <= 251.3 * 2) return "#FFE500";
  else return "#77ef3b";
}

function prepareScatterData(data) {
  //   console.log(data);
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

  data.forEach((el) => {
    allPokemonNames.push(el.name);
  });

  let correlation = getCorrelation(weightBaseStatsCorr);
  let cachedCorr = correlation;
  console.log(correlation);
  const corrArray = [];

  for (let i = 0; i < weightBaseStats.length; i++) {
    corrArray.push({ x: i, y: cachedCorr.toFixed(2) });
    cachedCorr += correlation;
  }

  //   arr = arr.map(function (item, i) {
  //     return { x: item, y: arr[i - 1] };
  //   });

  //   config.data = {
  //     labels: allPokemonNames,
  //     datasets: [
  //       {
  //         radius: 7,
  //         data: weightBaseStats,
  //         backgroundColor: function (ctx) {
  //           const color = getStatRankingColor(ctx.raw.y);
  //           return color;
  //         },
  //       },
  //     ],
  //   };

  config.data = {
    labels: allPokemonNames,
    datasets: [
      {
        type: "line",
        label: "Korrelation",
        data: corrArray,
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

export function createScatterPlot(data) {
  prepareScatterData(data);
  new Chart(ctx, config);
}
