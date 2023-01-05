import { getAllPokemon, setUpData } from "./src/data";

import { createStackedBarChart } from "./src/charts/stackedBarchart";
import { createScatterPlotWeight } from "./src/charts/scatterplotWeight";
import { createScatterPlotHeight } from "./src/charts/scatterplotHeight";
import { createPolarChart } from "./src/charts/polarChart";

import "./style.css";

const scatterWeight = document.querySelector("#scatterplotWeight");
const scatterHeight = document.querySelector("#scatterplotHeight");

const toggleBtn = document.querySelector("#toggleScatterBtn");

toggleBtn.addEventListener("click", (e) => {
  scatterWeight.classList.toggle("hidden");
  scatterHeight.classList.toggle("hidden");

  if (e.target.innerText === "Höhe") e.target.innerText = "Gewicht";
  else e.target.innerText = "Höhe";
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
  createPolarChart();
}

setUpDashboard();
