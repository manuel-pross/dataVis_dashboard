import { createPieChart } from "./src/charts/piechart";
import { getAllPokemon } from "./src/data";
import "./style.css";

async function drawAllCharts() {
  const allPokemon = await getAllPokemon();
  console.log(allPokemon[allPokemon.length - 1]);
  createPieChart(allPokemon);
}

drawAllCharts();
