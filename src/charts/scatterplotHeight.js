import { Chart } from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";

import { getCorrelation } from "../utils";
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
        type: "linear",
        position: "bottom",
      },
      y: {
        max: 800,
        min: 150,
      },
    },
  },
};

function prepareScatterData(data) {
  const heightBaseStats = [];
  const heightBaseStatsCorr = [[], []];

  data.forEach((el) => {
    heightBaseStats.push({
      x: parseFloat(el.height_m),
      y: parseInt(el.total_points),
    });
    heightBaseStatsCorr[0].push(parseFloat(el.height_m));
    heightBaseStatsCorr[1].push(parseInt(el.total_points));
  });

  data.forEach((el) => {
    allPokemonNames.push(el.name);
  });

  let correlation = getCorrelation(heightBaseStatsCorr);

  console.log(correlation);

  config.data = {
    labels: allPokemonNames,
    datasets: [
      //   {
      //     type: "line",
      //     label: "Korrelation",
      //     data: corrArray,
      //     fill: false,
      //     backgroundColor: "red",
      //     borderColor: "red",
      //     pointRadius: 0,
      //   },
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
