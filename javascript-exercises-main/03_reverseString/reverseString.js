const reverseString = function(rawString) {

  let reversedString = '';

  for (let i = 1; i <= rawString.length; i++){
    reversedString = reversedString + rawString.substr(-i, 1);
  }

  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
