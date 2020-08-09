/* eslint-disable no-param-reassign */
/** randomChoiceFromRange:
 * @param {*} range
 * Returns a random integer from within the range,
 * exclusive of range.end */
function randomChoiceFromRange(range) {
  const { start, end } = range;
  const choice = Math.floor(start + Math.random() * (end - start));
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
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

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
function generateProblem(difficulty) {
  let a;
  let b;
  let operator;
  let solution;
  if (difficulty === 1) {
    a = Math.floor(Math.random() * 10 + 1);
    b = Math.floor(Math.random() * 10 + 1);
    operator = " + ";
    solution = a + b;
  } else if (difficulty === 2) {
    a = Math.floor(Math.random() * 10 + 1);
    b = Math.floor(Math.random() * 10 + 1);
    const choosePlus = Math.floor(Math.random() * 2 + 1) % 2 === 0;
    operator = choosePlus ? " + " : " - ";
    solution = choosePlus ? a + b : a - b;
  } else if (difficulty === 3) {
    a = Math.floor(Math.random() * 10 + 1);
    b = Math.floor(Math.random() * 10 + 1);
    operator = " x ";
    solution = a * b;
  } else if (difficulty === 4) {
    a = Math.floor(Math.random() * 100 + 1);
    b = Math.floor(Math.random() * 100 + 1);
    const choosePlus = Math.floor(Math.random() * 2 + 1) % 2 === 0;
    operator = choosePlus ? " + " : " - ";
    solution = choosePlus ? a + b : a - b;
  }
  if (Math.random() * 3 < 1){
    return {
      expression: `${a + operator  }__ = ${  solution}`,
      solution: b,
    };
  } 
    return {
      expression: a + operator + b,
      solution,
    };
  
}

const cascade = (oldProblem, difficulty) => {
  let newVar
  
  if (difficulty === 4) {
    newVar = Math.floor(Math.random() * 100 + 1);
  } else {
    newVar = Math.floor(Math.random() * 10 + 1);
  }

  let operator
  let solution
  if (difficulty === 3) {
    operator = " x "
    solution = oldProblem.solution * newVar
  } else if (difficulty === 1) {
    operator = " + "
    solution = oldProblem.solution + newVar
  } else {
    const choosePlus = Math.floor(Math.random() * 2 + 1) % 2 === 0;
    operator = choosePlus ? " + " : " - ";
    solution = choosePlus ? oldProblem.solution + newVar : oldProblem.solution - newVar;
  }

  const expression = oldProblem.expression + operator + newVar

  return {
    expression,
    solution,
  };
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
 * and the lower range would be (-9 thru solution). */
function generateRanges(difficulty, solution) {
  // let upperRange;
  // let lowRange;
  // if (difficulty === 1) {
  //   upperRange = { start: solution + 1, end: 20 };
  //   lowRange = { start: 2, end: solution };
  // } else if (difficulty === 2 || difficulty === 5) {
  //   upperRange = { start: solution + 1, end: 20 };
  //   lowRange = { start: -9, end: solution };
  // } else if (difficulty === 3) {
  //   upperRange = { start: solution + 1, end: 100 };
  //   lowRange = { start: 1, end: solution };
  // } else if (difficulty === 4) {
  //   upperRange = { start: solution + 1, end: 200 };
  //   lowRange = { start: -99, end: solution };
  // }
  return {
    upperRange: { start: solution + 1, end: solution + 1 + 15 },
    lowRange: { start: solution - 15, end: solution },
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
 *  numbers above the solution (upperRange), or from a range of
 *  numbers below the solution (lowRange).
 *
 *  Through this method, we ensure that the array
 *  returned contains no duplicate choices and there is just
 *  one correct choice. */
function generateChoices(difficulty, solution) {
  const numWrongChoices = 2;
  const { upperRange, lowRange } = generateRanges(difficulty, solution);

  const choicesArray = [];
  for (let i = 0; i < numWrongChoices; i += 1) {
    const pickFromUpper = Math.floor(Math.random() * 2 + 1) % 2 === 0;
    const upperRangeLength = upperRange.end - upperRange.start;
    const lowRangeLength = lowRange.end - lowRange.start;

    let range;
    if (upperRangeLength > 0 && lowRangeLength > 0) {
      range = pickFromUpper ? upperRange : lowRange;
    } else {
      range = upperRangeLength > 0 ? upperRange : lowRange;
    }

    const choice = randomChoiceFromRange(range);
    const firstSplitLength = choice - range.start;
    const secondSplitLength = range.end - (choice + 1);
    if (firstSplitLength > secondSplitLength) {
      range.end = choice;
    } else {
      range.start = choice + 1;
    }
    choicesArray.push(choice);
  }
  choicesArray.push(solution);
  return choicesArray;
}

/** generateChoices:
 * @param {*} difficulty
 * Based on the difficulty level which is a number from 1-4, returns
 * the full object representation of a math problem which consists
 * of the string expression of the problem, its answer choices,
 * and its solution. */
function getProblemObject(difficulty, oldProblem = null) {
  let problem;
  if (oldProblem === null || oldProblem === undefined) {
    problem = generateProblem(difficulty)
  } else if (oldProblem.expression.length >= 17 || oldProblem.expression.includes("_")) { // if the cascade has reached max number of times
      problem = generateProblem(difficulty);
    } else if (oldProblem.expression.length >= 9) { // if it has cascaded before
      if (Math.random() * 10 < 3) { // high chance of cascading again
        problem = generateProblem(difficulty)
      } else {
        problem = cascade(oldProblem, difficulty);
      }
    } else if (Math.random() * 5 < 1) {
      problem = cascade(oldProblem, difficulty)
    } else {
      problem = generateProblem(difficulty);
    }
  const { expression, solution } = problem;
  const choicesArray = generateChoices(difficulty, solution);
  shuffleChoices(choicesArray);
  return {
    expression,
    solution,
    choices: choicesArray,
  };
}

/** getProblem:
 * Returns the object representation of a math problem with
 * a random level of difficulty. */
export default function getProblem(problem = null, difficulty = Math.floor(Math.random() * 5 + 1)) {
  return getProblemObject(difficulty, problem)
}