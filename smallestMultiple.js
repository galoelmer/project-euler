/* 

Smallest multiple

Problem 5
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/

console.time('Timing');

let smallestNumber = 20;
let foundNumber = false;

while (!foundNumber) {
  if (
    smallestNumber % 1 === 0 &&
    smallestNumber % 2 === 0 &&
    smallestNumber % 3 === 0 &&
    smallestNumber % 4 === 0 &&
    smallestNumber % 5 === 0 &&
    smallestNumber % 6 === 0 &&
    smallestNumber % 7 === 0 &&
    smallestNumber % 8 === 0 &&
    smallestNumber % 9 === 0 &&
    smallestNumber % 10 === 0 &&
    smallestNumber % 11 === 0 &&
    smallestNumber % 12 === 0 &&
    smallestNumber % 13 === 0 &&
    smallestNumber % 14 === 0 &&
    smallestNumber % 15 === 0 &&
    smallestNumber % 16 === 0 &&
    smallestNumber % 17 === 0 &&
    smallestNumber % 18 === 0 &&
    smallestNumber % 19 === 0 &&
    smallestNumber % 20 === 0
  ) {
    foundNumber = true;
  } else {
    smallestNumber++;
  }
}

console.timeEnd('Timing');

console.log(
  `${smallestNumber} is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20`
);
// smallestNumber = 232792560
