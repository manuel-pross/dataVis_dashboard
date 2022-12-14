import { createPieChart } from "./src/charts/piechart";
import { createScatterPlot } from "./src/charts/scatterplot";
import { createStackedBarChart } from "./src/charts/stackedBarchart";
import { getAllPokemon } from "./src/data";
import "./style.css";

async function drawAllCharts() {
  const allPokemon = await getAllPokemon();
  // createPieChart(allPokemon);
  createStackedBarChart(allPokemon);
  createScatterPlot(allPokemon);
}

drawAllCharts();
