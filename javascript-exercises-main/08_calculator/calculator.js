const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  let sum = 0;

  array.forEach(element => {
    sum += element;
  });

  return sum;
};

const multiply = function (array) {
  let product = 1;

  array.forEach(element => {
    product *= element;
  });

  return product;
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (number) {
  
  let total = 1;
  
  while (number > 0) {
    total *= number;
    number--;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
