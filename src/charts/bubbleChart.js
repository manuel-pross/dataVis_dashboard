import { Chart } from "chart.js/auto";
import { typesColorAmount, resitencesMap } from "../dataStructures";

const ctx = document.getElementById("bubbleChart");

const typeCombinations = [];

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

function generateCombinations() {
  typesColorAmount.forEach((type) => {
    typeCombinations.push({
      name: type.name,
      amountDoubleRes: 0,
      amountQadrupleRes: 0,
      amountCompleteRes: 0,
      amountPokemon: 0,
    });
    typesColorAmount.forEach((type2) => {
      if (type.name !== type2.name) {
        const newCombination = `${type.name}/${type2.name}`;
        const newCombinationReverse = newCombination
          .split("/")
          .reverse()
          .join("/");
        const foundReverseCombination = typeCombinations.find(
          (combi) => combi.name === newCombinationReverse
        );
        if (!foundReverseCombination)
          typeCombinations.push({
            name: newCombination,
            amountDoubleRes: 0,
            amountQadrupleRes: 0,
            amountCompleteRes: 0,
            amountPokemon: 0,
          });
      }
    });
  });

  console.log(resitencesMap);

  typesColorAmount.forEach((singleType) => {
    typeCombinations.forEach((typeCombination) => {});
  });

  // console.log(typeCombinations);
}

function calculateResistences(data) {}

export function prepareBubbleChartdata(data) {
  generateCombinations();
  calculateResistences(data);
}

export function createBubbleChart(data) {
  prepareBubbleChartdata(data);
  new Chart(ctx, config);
}
