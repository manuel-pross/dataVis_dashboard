import { createPieChart } from "./src/charts/piechart";
import { createScatterPlot } from "./src/charts/scatterplot";
import { getAllPokemon } from "./src/data";
import "./style.css";

async function drawAllCharts() {
  const allPokemon = await getAllPokemon();
  // console.log(allPokemon[allPokemon.length - 1]);
  createPieChart(allPokemon);
  createScatterPlot(allPokemon);
}

drawAllCharts();
