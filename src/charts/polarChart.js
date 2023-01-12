import { Chart } from "chart.js/auto";

import { fetchedPokemon, typeCombinations, typesColorAmount } from "../data";

import { fontSizeLabel2, fontSizeTitleHeading } from "../chartStyles";

import { publicScatterHeight } from "./scatterplotHeight";
import { publicScatterWeight } from "./scatterplotWeight";
import { getTranslation } from "../utils";

const ctx = document.getElementById("polar");

const cache = new Map();
let width = null;
let height = null;
const preparedData = { labels: [], labelsGerman: [], resistences: [] };

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
    onClick: (event, elements) => {
      publicScatterHeight.data.datasets[1].pointBackgroundColor.forEach(
        (colorPoint, i) => {
          publicScatterHeight.data.datasets[1].pointBackgroundColor[i] =
            "black";
        }
      );
      publicScatterWeight.data.datasets[1].pointBackgroundColor.forEach(
        (colorPoint, i) => {
          publicScatterWeight.data.datasets[1].pointBackgroundColor[i] =
            "black";
        }
      );

      publicScatterHeight.update();
      publicScatterWeight.update();

      // publicScatterHeight.data.datasets[1].pointBackgroundColor.forEach(
      //   (el) => {
      //     if (el === "fad201") console.log("fad201");
      //   }
      // );

      const foundTypeCombo = preparedData.labels[elements[0].index];
      const types = foundTypeCombo.split("/");
      const firstType = types[0];
      const secondType = types[1];

      const foundIndices = [];

      fetchedPokemon.forEach((pokemon, pokeIndex) => {
        if (secondType) {
          if (
            (pokemon.type_1 === firstType && pokemon.type_2 === secondType) ||
            (pokemon.type_1 === secondType && pokemon.type_2 === firstType)
          ) {
            foundIndices.push(pokeIndex);
          }
        } else {
          if (!pokemon.type_2) {
            if (pokemon.type_1 === firstType || pokemon.type_2 === firstType)
              foundIndices.push(pokeIndex);
          }
        }
      });

      foundIndices.forEach((foundIndex) => {
        publicScatterHeight.data.datasets[1].pointBackgroundColor[foundIndex] =
          "#fad201";
        publicScatterWeight.data.datasets[1].pointBackgroundColor[foundIndex] =
          "#fad201";
      });

      publicScatterHeight.update();
      publicScatterWeight.update();
    },
  },
};

function translateCombi(combi) {
  const types = combi.split("/");
  const firstType = types[0];
  const secondType = types[1];

  const firstTypeTrans = getTranslation(firstType);
  let secondTypeTrans = "";

  if (secondType) {
    secondTypeTrans = getTranslation(secondType);
    return `${firstTypeTrans}/${secondTypeTrans}`;
  } else {
    return firstTypeTrans;
  }
}

export function preparePolarChartdata() {
  typeCombinations.forEach((typeCombi) => {
    if (typeCombi.amountRes > 6 && typeCombi.amountPokemon > 0) {
      preparedData.labels.push(typeCombi.name);
      preparedData.labelsGerman.push(translateCombi(typeCombi.name));
      preparedData.resistences.push(typeCombi.amountRes);
    }
  });

  config.data = {
    labels: preparedData.labelsGerman,
    datasets: [
      {
        label: "Anzahl Resistenzen: ",
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
