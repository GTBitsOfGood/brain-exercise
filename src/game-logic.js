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
* test here: https://jsbin.com/jedilijege/1/edit?js,console */
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

/** getProblem:
* Returns the full object representation of a math problem with
* a random level of difficulty.*/
function getProblem() {
  let randomDifficulty = Math.floor((Math.random()* 4 + 1));
  return getProblemObject(randomDifficulty);
}

/** generateChoices: 
* @param {*} difficulty 
* Based on the difficulty level which is a number from 1-4, returns 
* the full object representation of a math problem which consists 
* of the string expression of the problem, its answer choices,
* and its solution. */
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
*  numbers above the solution (upperRange), or from a range of 
*  numbers below the solution (lowRange). 
* 
*  Through this method, we ensure that the array
*  returned contains no duplicate choices, and there is just 
*  one correct choice.*/
function generateChoices(difficulty, solution) {
  let numWrongChoices = (difficulty > 2) ? 3 : 2;
  let {upperRange, lowRange} = generateRanges(difficulty, solution);

  let choicesArray = [];
  for (let i = 0; i < numWrongChoices; i++) {
    let pickFromUpper = (Math.floor(Math.random() * 2 + 1) % 2 === 0);
    let upperRangeLength = upperRange.end - upperRange.start;
    let lowRangeLength = lowRange.end - lowRange.start;

    let range
    if (upperRangeLength >  0 && lowRangeLength > 0) {
      range = (pickFromUpper) ? upperRange: lowRange;
    } else {
      range = (upperRangeLength > 0) ? upperRange: lowRange;
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
 * @param {*} solution
 * Based on the difficulty level, returns the widest upper  
 * and lower ranges for incorrect choices to be chosen from.
 * 
 * The idea is to create upper and lower ranges that span all of
 * the possible solutions to a problem of the given difficulty
 * level.
 * 
 * For example, with a difficulty 2 problem, the highest possible
 * solution is 20, and the lowest possible solution is -9.
 * 
 * Therefore, the upper range would be (solution + 1 thru 20)
 * and the lower range would be (-9 thru solution).*/
function generateRanges(difficulty, solution) {
  let upperRange
  let lowRange
  if (difficulty === 1 ) {
    upperRange = {start:solution + 1, end:20};
    lowRange = {start:2, end:solution};
  } else if (difficulty === 2) {
    upperRange = {start:solution + 1, end:20};
    lowRange = {start:-9, end:solution};
  } else if (difficulty === 3) {
    upperRange = {start:solution + 1, end:100};
    lowRange = {start:1, end:solution};
  } else if (difficulty === 4) {
    upperRange = {start:solution + 1, end:200};
    lowRange = {start:-99, end:solution};
  }
  return {
    upperRange: upperRange,
    lowRange: lowRange
  };
}

/** randomChoiceFromRange:
 * @param {*} range 
 * Returns a random integer from within the range, 
 * exclusive of range.end*/
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
 *  will have equal probabilities of occurring. */
function shuffleChoices(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i]; 
    array[i] = array[j];  
    array[j] = temp;
  }
}
console.log(getProblem());


