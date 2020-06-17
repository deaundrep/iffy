// Your code here!
const colorCombinator = require('./color-combinator.js')
const colorDeconstructor = require('./color-deconstructor.js')
const userInput1 = getInput(0)
const userInput2 = getInput(1)
const message = colorCombinator(userInput1 , userInput2);

if (userInput1 !== 'undefined' && userInput2 === 'undefined') {
  return colorCombinator;
}

colorDeconstructor()

console.log(message);



// Our helper function here! Don't  touch!
function getInput(i) {
  return process.argv[i + 2];
}
