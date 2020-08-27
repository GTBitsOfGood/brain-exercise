/* eslint-disable no-param-reassign */
/** randomChoiceFromRange:
 * @param {*} range
 * Returns a random integer from within the range,
 * exclusive of range.end 
 **/
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


/** generateRanges:
 * @param {*} difficulty
 * @param {*} solution
 * Return ranges [sol - 15, sol), [sol + 1, sol + 1 + 15)
 **/
function generateRanges(solution) {
  return {
    upperRange: { start: solution + 1, end: solution + 1 + 15 },
    lowRange: { start: solution - 15, end: solution },
  };
}

/** generateChoices:
 * @param {*} difficulty
 * @param {*} solution
 * Returns array of unique answer choices
 **/
function generateChoices(solution) {
  const numChoices = 3;
  const { upperRange, lowRange } = generateRanges(solution);

  const choiceSet = new Set()
  choiceSet.add(solution)

  while (choiceSet.size < numChoices) {
    //If a coin lands heads
    if (Math.floor(Math.random() * 2 + 1) % 2 === 0) {
      //pick a larger number than the solution 
      choiceSet.add(randomChoiceFromRange(upperRange));
    } else {
      choiceSet.add(randomChoiceFromRange(lowRange));
    }
  }
  return [...choiceSet]
}

/**
 * @param {*} difficulty
 * Based on the difficulty level which is a number from 1-4, returns
 * the full object representation of a math problem which consists
 * of the string expression of the problem, its answer choices,
 * and its solution. */
function getProblemObject(difficulty) {
  const problem = generateProblem(difficulty)
  const { expression, solution } = problem;
  const choicesArray = generateChoices(solution);
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
export default function getProblem(difficulty = Math.floor(Math.random() * 4 + 1)) {
  return getProblemObject(difficulty)
}