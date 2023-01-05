import * as ss from "simple-statistics";

export function getCorrelation(data) {
  const corr = ss.sampleCorrelation(data[0], data[1]).toFixed(2);
  return parseFloat(corr);
}

export function findLineByLeastSquares(values_x, values_y) {
  var x_sum = 0;
  var y_sum = 0;
  var xy_sum = 0;
  var xx_sum = 0;
  var count = 0;

  /*
   * The above is just for quick access, makes the program faster
   */
  var x = 0;
  var y = 0;
  var values_length = values_x.length;

  if (values_length != values_y.length) {
    throw new Error(
      "The parameters values_x and values_y need to have same size!"
    );
  }

  /*
   * Above and below cover edge cases
   */
  if (values_length === 0) {
    return [[], []];
  }

  /*
   * Calculate the sum for each of the parts necessary.
   */
  for (let i = 0; i < values_length; i++) {
    x = values_x[i];
    y = values_y[i];
    x_sum += x;
    y_sum += y;
    xx_sum += x * x;
    xy_sum += x * y;
    count++;
  }

  /*
   * Calculate m and b for the line equation:
   * y = x * m + b
   */
  var m = (count * xy_sum - x_sum * y_sum) / (count * xx_sum - x_sum * x_sum);
  var b = y_sum / count - (m * x_sum) / count;

  /*
   * We then return the x and y data points according to our fit
   */
  var result_values_x = [];
  var result_values_y = [];

  for (let i = 0; i < values_length; i++) {
    x = values_x[i];
    y = x * m + b;
    result_values_x.push(x);
    result_values_y.push(y);
  }

  return [result_values_x, result_values_y];
}

export function calculateRegression(xPoints, a, b) {
  const points = [];

  for (const i of xPoints) {
    points.push({ x: i, y: a * i + b });
  }

  return points;
}

export function getTranslation(type) {
  let translation = "";
  switch (type) {
    case "Normal":
      translation = "Normal";
      break;
    case "Fire":
      translation = "Feuer";
      break;
    case "Fighting":
      translation = "Kampf";
      break;
    case "Water":
      translation = "Wasser";
      break;
    case "Flying":
      translation = "Flug";
      break;
    case "Grass":
      translation = "Pflanze";
      break;
    case "Poison":
      translation = "Gift";
      break;
    case "Electric":
      translation = "Elektro";
      break;
    case "Ground":
      translation = "Boden";
      break;
    case "Psychic":
      translation = "Psycho";
      break;
    case "Rock":
      translation = "Gestein";
      break;
    case "Ice":
      translation = "Eis";
      break;
    case "Bug":
      translation = "Käfer";
      break;
    case "Dragon":
      translation = "Drache";
      break;
    case "Ghost":
      translation = "Geist";
      break;
    case "Dark":
      translation = "Unlicht";
      break;
    case "Steel":
      translation = "Stahl";
      break;

    default:
      translation = "Fee";
      break;
  }
  return translation;
}
