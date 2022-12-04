import * as ss from "simple-statistics";

export function getCorrelation(data) {
  const corr = ss.sampleCorrelation(data[0], data[1]).toFixed(2);
  return parseFloat(corr);
}
