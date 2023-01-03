import { Chart } from "chart.js/auto";
import { typesColorAmount } from "../dataStructures";

export const allPokemonNames = [];

const ctx = document.getElementById("stackedBarchart");

const config = {
  type: "bar",
  data: null,
  options: {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Typen",
        },
        stacked: true,
      },
      y: {
        title: {
          display: true,
          text: "Anzahl",
        },
        stacked: true,
      },
    },
  },
};

function getTypeColor(index, opacity) {
  let color = `rgba${typesColorAmount[index].color}`;
  return color.substring(0, color.length - 2) + `${opacity})`;
}

function prepareStackedBarData(data) {
  data.forEach((el) => {
    const firstType = typesColorAmount.find(
      (labelEl) => el.type_1 === labelEl.name
    );
    if (firstType) firstType.amountFirstType += 1;
    const secondType = typesColorAmount.find(
      (labelEl) => el.type_2 === labelEl.name
    );
    if (secondType) secondType.amountSecondType += 1;
  });

  getTypeColor(1, 1);

  const typeNames = typesColorAmount.map((el) => {
    return el.german_name;
  });

  const typeCountFirstType = typesColorAmount.map((el) => {
    return el.amountFirstType;
  });

  const typeCountSecondType = typesColorAmount.map((el) => {
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
