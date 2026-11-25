"use strict";

const scores = [5, 7, 32, 31, 8];
const distances = [12.4, -13.55, 67.44];
const cities = ["Helsinki", "Lisbon", "New York", "Shanghai"];

console.log("Fourth city:", cities[3]);
console.log("Fourth score:", scores[3]);
console.log("Number of distances:", distances.length);

console.log("\nScores:");
for (let index = 0; index < scores.length; index += 1) {
  console.log(`Index ${index}: ${scores[index]}`);
}

console.log("\nDistances, in reverse order:");
for (let index = distances.length - 1; index >= 0; index -= 1) {
  console.log(distances[index]);
}

// Common array methods.
const colors = ["red", "blue", "yellow"];
colors.push("green");
colors[0] = "purple";
console.log("\nColors:", colors.join(", "));
console.log("Removed last color:", colors.pop());

// Arrays can contain other arrays.
const jumpResults = [
  ["Mike Powell", 8.95],
  ["Bob Beamon", 8.9],
  ["Carl Lewis", 8.87],
];

console.log("\nJump results:");
for (const [athlete, distance] of jumpResults) {
  console.log(`${athlete}: ${distance} m`);
}

console.table(jumpResults);
