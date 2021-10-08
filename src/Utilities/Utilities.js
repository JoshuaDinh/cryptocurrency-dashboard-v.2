import numeral from "numeral";

export function determineColor(coin) {
  return coin <= 0 ? "red" : "green";
}

export function format(number) {
  return numeral(number).format("$0,0.00");
}

export function formatShortened(number) {
  return numeral(number).format("0.0a");
}
