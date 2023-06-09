const factorialFunc = require("../factorial/index");
const ratioFunc = require("../ratio/index");

const ratioAndFactorial = (num1, num2, num3) => {
  let ratio = ratioFunc(num1, num2);
  let factorial = factorialFunc(num3);
  const object = {
    ratio: ratio,
    factorial: factorial,
  };
  return object;
};

module.exports = ratioAndFactorial;
