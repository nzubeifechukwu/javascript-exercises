const convertToCelsius = function (temperature) {
  return round((temperature - 32) * (5 / 9), 1);
};

const convertToFahrenheit = function (temperature) {
  return round(temperature * (9 / 5) + 32, 1);
};

function round(value, precision) {
  var multiplier = Math.pow(10, precision);
  return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
