/*
* Takes a parameter difficulty which is a number from 1-4 and returns a string
* representation of a math problem based on the difficulty level.
* Level 1: adding numbers 1 - 10
* Level 2: adding and subtracting numbers 1 - 10
* Level 3: multiplication numbers 1 - 10
* Level 4: adding and subtracting numbers 1-100
*/
function getProblem( difficulty ) {
  let a
  let b
  let operator
  if (difficulty === 1) {
    a = Math.floor(Math.random() * 10 + 1)
    b = Math.floor(Math.random() * 10 + 1)
    operator = " + "
  } else if (difficulty === 2) {
    a = Math.floor(Math.random() * 10 + 1)
    b = Math.floor(Math.random() * 10 + 1)
    operator = (Math.floor((Math.random() * 2 + 1)) % 2 === 0) ? " + ":" - "
  } else if (difficulty === 3) {
    a = Math.floor(Math.random() * 10 + 1)
    b = Math.floor(Math.random() * 10 + 1)
    operator = " * "
  } else if (difficulty === 4) {
    a = Math.floor(Math.random() * 100 + 1)
    b = Math.floor(Math.random() * 100 + 1)
    operator = (Math.floor((Math.random() * 2 + 1)) % 2 === 0) ? " + ":" - "
  }
  return a + operator + b
}

console.log(myFunction());