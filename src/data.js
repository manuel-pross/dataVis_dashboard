import * as d3 from "d3";

export async function getAllPokemon() {
  const allPokemon = await d3.csv("./data/pokedex.csv");

  //48 Megapokemon werden herausgefiltert, das passt da mewtu und glurak zwei stueck haben
  //2 Primal grouden und kyogre werden herausgefiltert
  //1 Pokemon welches kein gewicht hat wird herausgefiltert
  const filteredPokemon = allPokemon.filter(
    (el) =>
      // hier ist das leerzeichen nach Mega wichtig weil sonst Meganie rausgefiltert wird ;)
      !el.name.includes("Mega ") &&
      !el.name.includes("Primal") &&
      el.weight_kg !== ""
  );
  const allPokemonGerman = filteredPokemon.map((el) => {
    el.name = el.german_name;
    return el;
  });
  // console.log(countPokemon(allPokemonGerman, "Steel"));

  return allPokemonGerman;
}

function countPokemon(allPokemon, pokemonType) {
  let counter = 0;
  allPokemon.forEach((el) => {
    if (el.type_1 === pokemonType || el.type_2 === pokemonType) {
      counter++;
    }
  });
  return counter;
}
