"use strict";

// Use const when a binding should not be reassigned, and let when it should.
const courseName = "Introduction to Programming";
const credits = 5;
let currentLesson = 1;

console.log(`${courseName} is worth ${credits} credits.`);
currentLesson += 1;
console.log("Current lesson:", currentLesson);

// JavaScript is dynamically typed: a value has a type, and a variable can
// later be assigned a value of another type.
const numberValue = 5;
const stringValue = "5";

console.log("Number:", numberValue, typeof numberValue);
console.log("String:", stringValue, typeof stringValue);
console.log("Convert text to a number:", Number(stringValue) + 3);

// Arithmetic operators.
const firstNumber = 10;
const secondNumber = 3;

console.log("Addition:", firstNumber + secondNumber);
console.log("Subtraction:", firstNumber - secondNumber);
console.log("Multiplication:", firstNumber * secondNumber);
console.log("Division:", firstNumber / secondNumber);
console.log("Remainder:", firstNumber % secondNumber);

// Convert meters to other units and format each result to three decimals.
const meters = 1000;
const conversions = {
  kilometers: meters / 1000,
  miles: meters / 1609.344,
  yards: meters / 0.9144,
  feet: meters / 0.3048,
  inches: meters / 0.0254,
  lightYears: meters / 9.460730472e15,
};

console.log(`\n${meters} meters is approximately:`);
for (const [unit, value] of Object.entries(conversions)) {
  console.log(`${unit}: ${value.toFixed(3)}`);
}

// process.stdout.write writes strings and does not add a newline automatically.
process.stdout.write("\nWritten with process.stdout.write()\n");
