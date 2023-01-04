import { getAllPokemon, setUpData } from "./src/data";

import { createStackedBarChart } from "./src/charts/stackedBarchart";
import { createScatterPlotWeight } from "./src/charts/scatterplotWeight";
import { createScatterPlotHeight } from "./src/charts/scatterplotHeight";
import { createBubbleChart } from "./src/charts/bubbleChart";

import "./style.css";

const scatterWeight = document.querySelector("#scatterplotWeight");
const scatterHeight = document.querySelector("#scatterplotHeight");

document.querySelector("#toggleScatter").addEventListener("click", (e) => {
  scatterWeight.classList.toggle("hidden");
  scatterHeight.classList.toggle("hidden");
});

async function setUpDashboard() {
  const allPokemon = await getAllPokemon();
  setUpData(allPokemon);
  drawAllCharts(allPokemon);
}

function drawAllCharts(allPokemon) {
  createStackedBarChart(allPokemon);
  createScatterPlotWeight(allPokemon);
  createScatterPlotHeight(allPokemon);
  createBubbleChart(allPokemon);
}

setUpDashboard();
