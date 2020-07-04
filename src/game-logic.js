const {diff} = require("react-native-reanimated")



/* generateProblem: 
* Based on the difficulty level which is a number from 1-4, returns an object
* representation of a math problem which consists of the string
* expression of the problem, and its solution.
* 
* Level 1: adding numbers 1 - 10
* Level 2: adding and subtracting numbers 1 - 10
* Level 3: multiplication numbers 1 - 10
* Level 4: adding and subtracting numbers 1-100
* test here: https://jsbin.com/jedilijege/1/edit?js,console
*/
function generateProblem( difficulty ) {
  let a
  let b
  let operator 
  let solution
  if (difficulty === 1) {
    a = Math.floor(Math.random() * 10 + 1)
    b = Math.floor(Math.random() * 10 + 1)
    operator = " + "
    solution = a + b;
  } else if (difficulty === 2) {
    a = Math.floor(Math.random() * 10 + 1)
    b = Math.floor(Math.random() * 10 + 1)
    choosePlus = (Math.floor((Math.random() * 2 + 1)) % 2 === 0);
    operator = (choosePlus) ? " + ":" - ";
    solution = (choosePlus) ? a + b: a - b;
  } else if (difficulty === 3) {
    a = Math.floor(Math.random() * 10 + 1)
    b = Math.floor(Math.random() * 10 + 1)
    operator = " * "
    solution = a * b;
  } else if (difficulty === 4) {
    a = Math.floor(Math.random() * 100 + 1)
    b = Math.floor(Math.random() * 100 + 1)
    choosePlus = (Math.floor((Math.random() * 2 + 1)) % 2 === 0);
    operator = (choosePlus) ? " + ":" - ";
    solution = (choosePlus) ? a + b: a - b;
  }
  return { 
    expression: a + operator + b,
    solution: solution 
  };
}

/** generateChoices: 
* @param {*} difficulty 
* @param {*} solution 
* Returns array of unique answer choices
*  
*  Including the solution,
*  4 answer choices are returned when difficulty > 2.
*  3 answer choices are returned when difficulty <= 2.
* 
*  The idea is to pick choices at random from either a range of
*  numbers above the solution (hiRange), or from a range of 
*  numbers below the solution (lowRange). 
* 
*  Through this method, we ensure that the array
*  returned contains no duplicate choices, and there is just 
*  one correct choice, regardless of the sign.
*/
function getProblemObject( difficulty ) {
  let problem = generateProblem(difficulty);
  let {expression, solution} = problem;
  const choicesArray = generateChoices(difficulty, solution)
  shuffleChoices(choicesArray)
  return {
    expression: expression,
    solution: solution,
    choices: choicesArray,
  }
}

/** generateChoices: 
* @param {*} difficulty 
* @param {*} solution 
* Returns array of unique answer choices
*  
*  Including the solution,
*  4 answer choices are returned when difficulty > 2.
*  3 answer choices are returned when difficulty <= 2.
* 
*  The idea is to pick choices at random from either a range of
*  numbers above the solution (hiRange), or from a range of 
*  numbers below the solution (lowRange). 
* 
*  Through this method, we ensure that the array
*  returned contains no duplicate choices, and there is just 
*  one correct choice, regardless of the sign.
*/
function generateChoices(difficulty, solution) {
  let numWrongChoices = (difficulty > 2) ? 3 : 2;
  let {hiRange, lowRange} = generateRanges(difficulty);

  let choicesArray = [];
  for (let i = 0; i < numWrongChoices; i++) {
    let pickFromHi = (Math.floor(Math.random() * 2 + 1) % 2 === 0);
    let hiRangeLength = hiRange.end - hiRange.start;
    let lowRangeLength = lowRange.end - lowRange.start;

    let range
    if (hiRangeLength >  0 && lowRangeLength > 0) {
      range = (pickFromHi) ? hiRange: lowRange;
    } else {
      range = (hiRangeLength > 0) ? hiRange: lowRange;
    }

    let choice = randomChoiceFromRange(range);
    let firstSplitLength = choice - range.start;
    let secondSplitLength = range.end - (choice + 1);
    if (firstSplitLength > secondSplitLength) {
      range.end = choice;
    } else {
      range.start = (choice + 1);
    }
    choicesArray.push(choice);
  }
  return choicesArray;
}

/** generateRanges:
 * @param {*} difficulty 
 * Returns the proper upper range and lower range
 * for incorrect choices to be chosen from.
 */
function generateRanges(difficulty) {
  let hiRange
  let lowRange
  if (difficulty === 1 ) {
    hiRange = {start:solution + 1, end:20};
    lowRange = {start:2, end:solution};
  } else if (difficulty === 2) {
    hiRange = {start:solution + 1, end:20};
    lowRange = {start:-9, end:solution};
  } else if (difficulty === 3) {
    hiRange = {start:solution + 1, end:100};
    lowRange = {start:1, end:solution};
  } else if (difficulty === 4) {
    hiRange = {start:solution + 1, end:200};
    lowRange = {start:-99, end:solution};
  }
  return {
    hiRange: hiRange,
    lowRange: lowRange
  };
}

/** randomChoiceFromRange:
 * @param {*} range 
 * Returns a random integer from within the range, 
 * exclusive of range.end
 */
function randomChoiceFromRange(range) {
  let {start, end} = range;
  const choice = Math.floor(start + Math.random()*(end - start)) ;
  return choice;
}

/** shuffleChoices:
 *  @param {*} array 
 *  Returns a shuffled array using the Fisher-Yates algorithm 
 *  for shuffling.
 * 
 *  The idea is to walk through the array in reverse order and swap
 *  each element with a random one before it.
 * 
 *  Through this method, all possible arrangements
 *  will have equal probabilities of occurring. 
 */
function shuffleChoices(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // pick a random element between 0 and i, inclusive.
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i]; 
    array[i] = array[j];  
    array[j] = temp;
  }
}
console.log(getProblem());


