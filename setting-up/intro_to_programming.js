"use strict";

// A program is a set of instructions that solves a problem.
console.log("Hello, world!");

// Functions give a name to reusable behavior.
function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

console.log("5 + 3 =", add(5, 3));

// Break a problem into small steps and handle edge cases explicitly.
function findLargest(numbers) {
  if (numbers.length === 0) {
    throw new RangeError("Provide at least one number.");
  }

  let largest = numbers[0];
  for (const number of numbers) {
    if (number > largest) {
      largest = number;
    }
  }
  return largest;
}

console.log("Largest number:", findLargest([5, 8, 2, 9, 3]));

// Algorithms use clear, ordered steps to transform input into output.
function calculateAverage(numbers) {
  if (numbers.length === 0) {
    throw new RangeError("Provide at least one number.");
  }

  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total / numbers.length;
}

console.log("Average:", calculateAverage([10, 20, 30]));

// Repetition is a good fit for a loop.
function fizzBuzz(limit) {
  for (let number = 1; number <= limit; number += 1) {
    if (number % 15 === 0) {
      console.log("FizzBuzz");
    } else if (number % 3 === 0) {
      console.log("Fizz");
    } else if (number % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(number);
    }
  }
}

fizzBuzz(15);
