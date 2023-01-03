import { Chart } from "chart.js/auto";
import { TypesEnum } from "../enums";
import { types } from "./stackedBarchart";

const ctx = document.getElementById("bubbleChart");

const typeCombinations = [];
const resitencesMap = [
  [
    TypesEnum.Normal,
    {
      simpleResistences: [],
      completeResistences: [TypesEnum.Ghost],
      weaknesses: [TypesEnum.Fighting],
    },
  ],
  [
    TypesEnum.Fire,
    {
      simpleResistences: [
        TypesEnum.Bug,
        TypesEnum.Steel,
        TypesEnum.Fire,
        TypesEnum.Grass,
        TypesEnum.Ice,
        TypesEnum.Fairy,
      ],
      completeResistences: [],
      weaknesses: [],
    },
  ],
  [
    TypesEnum.Fighting,
    { simpleResistences: [], completeResistences: [], weaknesses: [] },
  ],
  ["Water", { simpleResistences: [], completeResistences: [], weaknesses: [] }],
  [
    "Flying",
    { simpleResistences: [], completeResistences: [], weaknesses: [] },
  ],
  ["Grass", { simpleResistences: [], completeResistences: [], weaknesses: [] }],
  [
    "Poison",
    { simpleResistences: [], completeResistences: [], weaknesses: [] },
  ],
  [
    "Electric",
    { simpleResistences: [], completeResistences: [], weaknesses: [] },
  ],
  [
    "Ground",
    { simpleResistences: [], completeResistences: [], weaknesses: [] },
  ],
  [
    "Psychic",
    { simpleResistences: [], completeResistences: [], weaknesses: [] },
  ],
  ["Rock", { simpleResistences: [], completeResistences: [], weaknesses: [] }],
  ["Ice", { simpleResistences: [], completeResistences: [], weaknesses: [] }],
  ["Bug", { simpleResistences: [], completeResistences: [], weaknesses: [] }],
  [
    "Dragon",
    { simpleResistences: [], completeResistences: [], weaknesses: [] },
  ],
  ["Ghost", { simpleResistences: [], completeResistences: [], weaknesses: [] }],
  ["Dark", { simpleResistences: [], completeResistences: [], weaknesses: [] }],
  ["Steel", { simpleResistences: [], completeResistences: [], weaknesses: [] }],
  ["Fairy", { simpleResistences: [], completeResistences: [], weaknesses: [] }],
];

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
  types.forEach((type) => {
    typeCombinations.push({
      name: type.name,
      amountDoubleRes: 0,
      amountQadrupleRes: 0,
      amountCompleteRes: 0,
      amountPokemon: 0,
    });
    types.forEach((type2) => {
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

  types.forEach((singleType) => {
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
