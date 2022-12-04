import Chart from "chart.js/auto";

const ctx = document.getElementById("doughnutChart");

export const types = [
  { type: "Normal", color: "#A8A878", amount: 0, german_name: "Normal" },
  { type: "Fire", color: "#F08030", amount: 0, german_name: "Feuer" },
  { type: "Fighting", color: "#C03028", amount: 0, german_name: "Kampf" },
  { type: "Water", color: "#6890F0", amount: 0, german_name: "Wasser" },
  { type: "Flying", color: "#A890F0", amount: 0, german_name: "Flug" },
  { type: "Grass", color: "#78C850", amount: 0, german_name: "Pflanze" },
  { type: "Poison", color: "#A040A0", amount: 0, german_name: "Gift" },
  { type: "Electric", color: "#F8D030", amount: 0, german_name: "Elektro" },
  { type: "Ground", color: "#E0C068", amount: 0, german_name: "Boden" },
  { type: "Psychic", color: "#F85888", amount: 0, german_name: "Psycho" },
  { type: "Rock", color: "#B8A038", amount: 0, german_name: "Gestein" },
  { type: "Ice", color: "#98D8D8", amount: 0, german_name: "Eis" },
  { type: "Bug", color: "#A8B820", amount: 0, german_name: "Käfer" },
  { type: "Dragon", color: "#7038F8", amount: 0, german_name: "Drache" },
  { type: "Ghost", color: "#705898", amount: 0, german_name: "Geist" },
  { type: "Dark", color: "#705848", amount: 0, german_name: "Unlicht" },
  { type: "Steel", color: "#B8B8D0", amount: 0, german_name: "Stahl" },
  { type: "Fairy", color: "#EE99AC", amount: 0, german_name: "Fee" },
];

const config = {
  type: "doughnut",
  data: null,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Typenverteilung",
      },
    },
  },
};

function preperatePieData(data) {
  data.forEach((el) => {
    const firstType = types.find((labelEl) => el.type_1 === labelEl.type);
    if (firstType) firstType.amount += 1;
    const secondType = types.find((labelEl) => el.type_2 === labelEl.type);
    if (secondType) secondType.amount += 1;
  });

  const typeColors = types.map((el) => {
    return el.color;
  });

  const typeNames = types.map((el) => {
    return el.german_name;
  });

  const typeCounts = types.map((el) => {
    return el.amount;
  });

  config.data = {
    labels: typeNames,
    datasets: [
      {
        label: "Anzahl",
        data: typeCounts,
        backgroundColor: typeColors,
      },
    ],
  };
}

export function createPieChart(data) {
  preperatePieData(data);
  new Chart(ctx, config);
}
