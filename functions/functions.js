"use strict";

function sayHello(name) {
  return `Hello, ${name}!`;
}

function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function circumference(radius) {
  if (radius < 0) {
    throw new RangeError("Radius cannot be negative.");
  }
  return 2 * Math.PI * radius;
}

console.log(sayHello("JavaScript learner"));
console.log("5 + 10 =", sum(5, 10));
console.log("Circumference for radius 3:", circumference(3).toFixed(2));

// A method is a function stored as an object's property.
const calculator = {
  multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
  },
};

console.log("4 × 6 =", calculator.multiply(4, 6));

const smileyWords = new Map([
  [":)", "smiling"],
  [":-)", "smiling"],
  [":(", "sad"],
  [":-(", "sad"],
  [";)", "winking"],
  [";-)", "winking"],
  ["<3", "love"],
]);

function replaceSmileys(text, replacer = null) {
  return text.replace(/:-?\)|:-?\(|;-?\)|<3/g, (token) => {
    return replacer ?? smileyWords.get(token);
  });
}

console.log(replaceSmileys("Hello :) I learned a lot <3"));
console.log(replaceSmileys("Hello ;) This is a custom replacement.", "😊"));
