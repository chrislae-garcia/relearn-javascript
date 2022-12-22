const palindromes = function (string) {

  let lowerCaseString = string.toLowerCase();
  let originalString = '';

  for (i = 0; i < string.length; i++) {
    let charCode = lowerCaseString.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      originalString+=lowerCaseString.substr(i,1);
    }
  }

  let reversedString = originalString.split('').reverse().join('');

  return reversedString == originalString;
};

// Do not edit below this line
module.exports = palindromes;
