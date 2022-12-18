import { Chart } from "chart.js/auto";

export const allPokemonNames = [];

const ctx = document.getElementById("bubbleChart");

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

const pokemonWeaknesses = new Map([]);

const pokemonWeakEffect = [];

function calculateEffectivnesses(data) {
  const pokemonWeakAndEffect = [];

  data.forEach((el) => {
    const pokemon = {
      name: "",
      amountEffectDouble: 0,
      amountEffecQuadrupel: 0,
    };

    el.against_bug === "2" && pokemon.amountEffectDouble++;
    el.against_dark === "2" && pokemon.amountEffectDouble++;
    el.against_dragon === "2" && pokemon.amountEffectDouble++;
    el.against_electric === "2" && pokemon.amountEffectDouble++;
    el.against_fairy === "2" && pokemon.amountEffectDouble++;
    el.against_fight === "2" && pokemon.amountEffectDouble++;
    el.against_fire === "2" && pokemon.amountEffectDouble++;
    el.against_flying === "2" && pokemon.amountEffectDouble++;
    el.against_ghost === "2" && pokemon.amountEffectDouble++;
    el.against_grass === "2" && pokemon.amountEffectDouble++;
    el.against_ground === "2" && pokemon.amountEffectDouble++;
    el.against_ice === "2" && pokemon.amountEffectDouble++;
    el.against_normal === "2" && pokemon.amountEffectDouble++;
    el.against_poison === "2" && pokemon.amountEffectDouble++;
    el.against_psychic === "2" && pokemon.amountEffectDouble++;
    el.against_rock === "2" && pokemon.amountEffectDouble++;
    el.against_steel === "2" && pokemon.amountEffectDouble++;
    el.against_water === "2" && pokemon.amountEffectDouble++;

    el.against_bug === "4" && pokemon.amountEffectQuadrupel++;
    el.against_dark === "4" && pokemon.amountEffectQuadrupel++;
    el.against_dragon === "4" && pokemon.amountEffectQuadrupel++;
    el.against_electric === "4" && pokemon.amountEffectQuadrupel++;
    el.against_fairy === "4" && pokemon.amountEffectQuadrupel++;
    el.against_fight === "4" && pokemon.amountEffectQuadrupel++;
    el.against_fire === "4" && pokemon.amountEffectQuadrupel++;
    el.against_flying === "4" && pokemon.amountEffectQuadrupel++;
    el.against_ghost === "4" && pokemon.amountEffectQuadrupel++;
    el.against_grass === "4" && pokemon.amountEffectQuadrupel++;
    el.against_ground === "4" && pokemon.amountEffectQuadrupel++;
    el.against_ice === "4" && pokemon.amountEffectQuadrupel++;
    el.against_normal === "4" && pokemon.amountEffectQuadrupel++;
    el.against_poison === "4" && pokemon.amountEffectQuadrupel++;
    el.against_psychic === "4" && pokemon.amountEffectQuadrupel++;
    el.against_rock === "4" && pokemon.amountEffectQuadrupel++;
    el.against_steel === "4" && pokemon.amountEffectQuadrupel++;
    el.against_water === "4" && pokemon.amountEffectQuadrupel++;

    pokemonWeakAndEffect.push(pokemon);
  });

  return pokemonWeakAndEffect;
}

export function prepareBubbleChartdata(data) {}

export function createBubbleChart(data) {
  prepareBubbleChartdata(data);
  new Chart(ctx, config);
}
