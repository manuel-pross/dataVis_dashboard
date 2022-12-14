import { Chart } from "chart.js/auto";

export const allPokemonNames = [];

const ctx = document.getElementById("stackedBarchart");

export const types = [
  {
    type: "Normal",
    color: "(168, 167, 122, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Normal",
  },
  {
    type: "Fire",
    color: "(238, 129, 48, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Feuer",
  },
  {
    type: "Fighting",
    color: "(194, 46, 40, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Kampf",
  },
  {
    type: "Water",
    color: "(99, 144, 240, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Wasser",
  },
  {
    type: "Flying",
    color: "(169, 143, 243, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Flug",
  },
  {
    type: "Grass",
    color: "(122, 199, 76, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Pflanze",
  },
  {
    type: "Poison",
    color: "(163, 62, 161, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Gift",
  },
  {
    type: "Electric",
    color: "(247, 208, 44, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Elektro",
  },
  {
    type: "Ground",
    color: "(226, 191, 101, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Boden",
  },
  {
    type: "Psychic",
    color: "(249, 85, 135, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Psycho",
  },
  {
    type: "Rock",
    color: "(182, 161, 54, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Gestein",
  },
  {
    type: "Ice",
    color: "(150, 217, 214, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Eis",
  },
  {
    type: "Bug",
    color: "(166, 185, 26, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Käfer",
  },
  {
    type: "Dragon",
    color: "(111, 53, 252, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Drache",
  },
  {
    type: "Ghost",
    color: "(115, 87, 151, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Geist",
  },
  {
    type: "Dark",
    color: "(112, 87, 70, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Unlicht",
  },
  {
    type: "Steel",
    color: "(183, 183, 206, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Stahl",
  },
  {
    type: "Fairy",
    color: "(214, 133, 173, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Fee",
  },
];

const config = {
  type: "bar",
  data: null,
  options: {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },
};

function getTypeColor(index, opacity) {
  let color = `rgba${types[index].color}`;
  return color.substring(0, color.length - 2) + `${opacity})`;
}

function prepareStackedBarData(data) {
  data.forEach((el) => {
    const firstType = types.find((labelEl) => el.type_1 === labelEl.type);
    if (firstType) firstType.amountFirstType += 1;
    const secondType = types.find((labelEl) => el.type_2 === labelEl.type);
    if (secondType) secondType.amountSecondType += 1;
  });

  getTypeColor(1, 1);

  const typeNames = types.map((el) => {
    return el.german_name;
  });

  const typeCountFirstType = types.map((el) => {
    return el.amountFirstType;
  });

  const typeCountSecondType = types.map((el) => {
    return el.amountSecondType;
  });

  config.data = {
    labels: typeNames,
    datasets: [
      {
        label: "Ersttyp",
        data: typeCountFirstType,
        backgroundColor: (ctx) => {
          return getTypeColor(ctx.dataIndex, 1);
        },
      },
      {
        label: "Zweittyp",
        data: typeCountSecondType,
        backgroundColor: (ctx) => {
          return getTypeColor(ctx.dataIndex, 0.5);
        },
      },
    ],
  };
}

export function createStackedBarChart(data) {
  prepareStackedBarData(data);
  new Chart(ctx, config);
}
