const convertToCelsius = function(fahrGrades) {
  return Math.round((fahrGrades - 32)*(5 / 9) * 10) / 10 ;
};

const convertToFahrenheit = function(celGrades) {
  return Math.round(((celGrades * (9 / 5)) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
