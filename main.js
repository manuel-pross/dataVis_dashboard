import { createStackedBarChart } from "./src/charts/stackedBarchart";
import { createScatterPlotWeight } from "./src/charts/scatterplotWeight";
import { getAllPokemon } from "./src/data";
import "./style.css";
import { createScatterPlotHeight } from "./src/charts/scatterplotHeight";

const scatterWeight = document.querySelector("#scatterplotWeight");
const scatterHeight = document.querySelector("#scatterplotHeight");

document.querySelector("#toggleScatter").addEventListener("click", (e) => {
  scatterWeight.classList.toggle("hidden");
  scatterHeight.classList.toggle("hidden");
});

async function drawAllCharts() {
  const allPokemon = await getAllPokemon();
  createStackedBarChart(allPokemon);
  createScatterPlotWeight(allPokemon);
  createScatterPlotHeight(allPokemon);
}

drawAllCharts();
