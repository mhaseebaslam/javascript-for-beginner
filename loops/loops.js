"use strict";

// Use while when repetition depends on a condition.
let count = 0;
while (count < 3) {
  console.log("while:", count);
  count += 1;
}

// A do...while loop always runs its body at least once.
let attempts = 0;
do {
  console.log("do...while attempt:", attempts + 1);
  attempts += 1;
} while (attempts < 2);

// Use for when the number of repetitions is known.
for (let number = 1; number <= 5; number += 1) {
  console.log(`${number} × 3 = ${number * 3}`);
}

const word = "JavaScript";
console.log("\nCharacters:");
for (let index = 0; index < word.length; index += 1) {
  console.log(`${index + 1}. ${word[index]}`);
}

function isPalindrome(text) {
  const normalized = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  for (let left = 0, right = normalized.length - 1; left < right; left += 1, right -= 1) {
    if (normalized[left] !== normalized[right]) {
      return false;
    }
  }
  return true;
}

console.log('\n"Never odd or even" is a palindrome:', isPalindrome("Never odd or even"));
