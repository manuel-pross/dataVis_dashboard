import { Chart } from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";

import { getRegression } from "../utils";

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
  if (statSum <= 195) return "#FF9600"; //orange #FF9600
  else if (statSum <= 195 * 2) return "#FFE500";
  else if (statSum <= 195 * 3) return "#CDF03A";
  else return "#2CE574";
}

function prepareScatterData(data) {
  //   console.log(data);
  const weightBaseStats = [];

  data.forEach((el) => {
    weightBaseStats.push({
      x: parseFloat(el.weight_kg),
      y: parseInt(el.total_points),
    });
  });

  data.forEach((el) => {
    allPokemonNames.push(el.name);
  });

  const result = getRegression(weightBaseStats);
  //   console.log(result);

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
      //   {
      //     type: "line",
      //     label: "Data",
      //     data: weightBaseStats,
      //     fill: false,
      //     backgroundColor: "rgba(218,83,79, .7)",
      //     borderColor: "rgba(218,83,79, .7)",
      //     pointRadius: 0,
      //   },
      {
        type: "scatter",
        labels: allPokemonNames,
        data: weightBaseStats,
        backgroundColor: "rgba(76,78,80, .7)",
        borderColor: "transparent",
      },
    ],
  };
}

export function createScatterPlot(data) {
  prepareScatterData(data);
  new Chart(ctx, config);
}
