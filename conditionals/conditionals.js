"use strict";

const score = 82;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Keep practicing.");
}

const number = 12;
if (number % 2 === 0) {
  console.log(`${number} is even.`);
} else {
  console.log(`${number} is odd.`);
}

// Strict comparisons check both value and type.
console.log('2 === "2":', 2 === "2");
console.log("Is between 1 and 10:", number >= 1 && number <= 10);

function describeNumbers(first, second, third) {
  if ([first, second, third].includes(2)) {
    console.log("You entered the magic number 2!");
  }

  if (first === second && second === third) {
    console.log("All three numbers are equal.");
  } else if (first !== second && first !== third && second !== third) {
    console.log("All three numbers are different.");
  } else {
    console.log("Exactly two numbers are equal.");
  }
}

describeNumbers(2, 4, 4);

const menuChoice = 2;
switch (menuChoice) {
  case 1:
    console.log("Hello!");
    break;
  case 2:
    console.log("Today's date:", new Date().toLocaleDateString());
    break;
  case 3:
    console.log("Goodbye!");
    break;
  default:
    console.log("Choose 1, 2, or 3.");
}
