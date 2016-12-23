'use strict';

function main (number, list_numbers) {
  // empty or undefined list_numbers
  if (!list_numbers || !list_numbers.length) return -1;

  let totalNumber = 0;
  for (let i = 0; i < list_numbers.length; i++) {
    if (list_numbers[i] === number) totalNumber++;
  }
  // if no matches we cannot split
  if (totalNumber === 0) return 0;

  // start looking on the right side for the position where
  // the number of no equals to number is the same to the equals
  // on the left side of the current position
  let rightNumber = 0;
  let rightNoNumber = 0;
  for (let j = list_numbers.length-1; j >= 0; j--) {
    if (list_numbers[j] === number) {
      rightNumber++;
    } else {
      rightNoNumber++;
    }
    if (rightNoNumber === (totalNumber-rightNumber)) {
      return j;
    }
  }

  return -1;
}

module.exports = {
  main
};
