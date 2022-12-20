const removeFromArray = function(myArray, ...toRemove) {
  return myArray.filter(e => !toRemove.includes(e));
};

// Do not edit below this line
module.exports = removeFromArray;
