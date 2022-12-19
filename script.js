// Takes a number and adds 7 to that number
function add7(number) {
  return number + 7;
}

// Takes two numbers and gets their product
function multiply(number1, number2) {
  return number1 * number2;
}

// Takes a string and capitalize only the first letter of that string
function capitalize(string) {
  let firstLetter = string.slice(0,1).toUpperCase();
  let otherLetters = string.slice(1).toLowerCase();
  
  return firstLetter + otherLetters;
}