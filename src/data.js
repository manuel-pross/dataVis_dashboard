import * as d3 from "d3";

export async function getAllPokemon() {
  return await d3.csv("./data/pokedex.csv");
}
