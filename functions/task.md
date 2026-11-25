# Functions

Practice defining functions, passing arguments, returning values, and reusing logic.

## 1. Print letters and numbers

Write `printLetters()` to print the letters `a` through `z`, and `printNumbers()` to print `1` through `9`. Call them in this order: letters, numbers, letters. Hint: `String.fromCharCode()` converts a character code to a character.

## 2. Repeat a sentence

Write a function that prints `Lorem ipsum dolor sit amet, consectetur adipiscing elit.` ten times. Call the function once.

## 3. Sum two numbers

Write `sum(firstNumber, secondNumber)` so it returns the sum. Call it three times with different arguments and print each result.

## 4. Circumference

Write a function that returns the circumference of a circle for a given radius. Use `circumference = 2 * Math.PI * radius`, then call it with three different radii.

## 5. Replace smileys

Ask the user for a line of text. Write `replaceSmileys(text)` to replace smiley tokens with words, and `replaceSmileysWithReplacer(text, replacer)` to replace any token with a custom string.

| Token | Replacement |
| --- | --- |
| `:)` or `:-)` | `smiling` |
| `:(` or `:-(` | `sad` |
| `;)` or `;-)` | `winking` |
| `<3` | `love` |

Use a regular expression or another clear approach. Test text containing multiple tokens and text with no matches.
