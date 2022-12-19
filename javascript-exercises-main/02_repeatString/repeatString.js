const repeatString = function(rawString, numberOfRepeats) {
  let repeatedString = '';

  if (numberOfRepeats < 0) return 'ERROR';

  for (i = 0; i < numberOfRepeats; i++) {
    repeatedString = repeatedString + rawString;
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
