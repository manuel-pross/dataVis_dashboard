import * as d3 from "d3";

export async function getAllPokemon() {
  const allPokemon = await d3.csv("./data/pokedex.csv");

  // hier ist das leerzeichen nach Mega wichtig weil sonst Meganie rausgefiltert wird ;)
  const filteredPokemon = allPokemon.filter(
    (el) =>
      !el.name.includes("Mega ") &&
      !el.name.includes("Primal") &&
      el.weight_kg !== ""
  );
  const allPokemonGerman = filteredPokemon.map((el) => {
    el.name = el.german_name;
    return el;
  });

  return allPokemonGerman;
}
