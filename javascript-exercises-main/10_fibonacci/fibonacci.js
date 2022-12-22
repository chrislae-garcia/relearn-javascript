const fibonacci = function(number) {

  if (number < 0) return 'OOPS';

  let arrFibonacci = [];

  for (i = 0 ; i < number ; i++) {
    if(arrFibonacci.length < 2) {
      arrFibonacci.push(1);
    } else {
      let sumOfLastPair = arrFibonacci[arrFibonacci.length-1]+arrFibonacci[arrFibonacci.length-2] 
      arrFibonacci.push(sumOfLastPair);
    }
  }

  return arrFibonacci[number-1];

};

// Do not edit below this line
module.exports = fibonacci;
