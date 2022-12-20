const sumAll = function (firstInt, lastInt) {

  if ((firstInt < 0 || lastInt < 0)
    || (typeof firstInt != 'number')
    || (typeof lastInt != 'number'))
    return 'ERROR';

  let smallInt = firstInt;
  let largeInt = lastInt;
  let temp = 0;
  let sum = 0;

  if (smallInt > largeInt) {
    temp = smallInt;
    smallInt = largeInt;
    largeInt = temp;
  }

  for (i = smallInt; i <= largeInt; i++) {
    sum = sum + i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
