import Chart from "chart.js/auto";

const ctx = document.getElementById("doughnutChart");

const types = [
  { type: "Normal", color: "#A8A878", amount: 0 },
  { type: "Fire", color: "#F08030", amount: 0 },
  { type: "Fighting", color: "#C03028", amount: 0 },
  { type: "Water", color: "#6890F0", amount: 0 },
  { type: "Flying", color: "#A890F0", amount: 0 },
  { type: "Grass", color: "#78C850", amount: 0 },
  { type: "Poison", color: "#A040A0", amount: 0 },
  { type: "Electric", color: "#F8D030", amount: 0 },
  { type: "Ground", color: "#E0C068", amount: 0 },
  { type: "Psychic", color: "#F85888", amount: 0 },
  { type: "Rock", color: "#B8A038", amount: 0 },
  { type: "Ice", color: "#98D8D8", amount: 0 },
  { type: "Bug", color: "#A8B820", amount: 0 },
  { type: "Dragon", color: "#7038F8", amount: 0 },
  { type: "Ghost", color: "#705898", amount: 0 },
  { type: "Dark", color: "#705848", amount: 0 },
  { type: "Steel", color: "#B8B8D0", amount: 0 },
  { type: "Fairy", color: "#EE99AC", amount: 0 },
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
        text: "Type Distribution",
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
    return el.type;
  });

  const typeCounts = types.map((el) => {
    return el.amount;
  });

  console.log(typeColors);
  console.log(types);

  config.data = {
    labels: typeNames,
    datasets: [
      {
        label: "Amount",
        data: typeCounts,
        backgroundColor: typeColors,
      },
    ],
  };
  console.log(data.length);
}

export function createPieChart(data) {
  preperatePieData(data);
  new Chart(ctx, config);
}
