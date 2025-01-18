// Conditionals

/* What Are Conditionals?
- Up till now, we've only written code that follows the same path every time.
- Quite often there are branches depending on specific conditions.
- This is where we need conditionals.
- In JS (and many other programming languages), you can use the keyword if to create conditionals.
- Sometimes there are more than just two branches in the program logic.
- For this, we need else.
- If-else works so that when the condition is true, you follow the if branch, in all the other cases, you follow the else branch.*/

// How To Write Conditionals. In JS, you write conditionals as shown in the example below.

if (selection.value == 1) {
  counter++;
} else if (selection.value == 2) {
  counter += 2;
} else {
  counter += 3;
}

/* Now let's try it for real!
1. Create a new JS file in VS Code.
2. Ask the user to input a number.
3. Check if the number is 0
   1. If yes -> print out "You entered a zero".
   2. If no -> print out "You entered something else".
4. Run your code and see if it works.*/

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Please enter a number: ", (number) => {
  if (number == 0) {
    console.log("You entered a zero");
  } else {
    console.log("You entered something else");
  }
  readline.close();
});

// Comparison Operations
// == equals
// x == 8 // false
// x == 2 // true
// === equal value and type
// x === 2 // true
// x === "2" // false
// != not equal
// x != 2 // false
// x != 5 // true
// !== not equal value or type
// x !== 2 // false
// x !== "2" // true
// < less than
// x < 3 // true
// x < 2 // false
// > greater than
// x > 3 // false
// x > 1 // true
// >= greater or equal to
// x >= 2 // true
// x >= 1 // false
// <= less than or equal to
// x <= 3 // true
// x <= 1 // false

let x = 2;

/* Logical Operations
Often in conditionals, you will need logical operators.
- If all the conditions need to be met, you use the logical AND operator &&.
  - if (somenumber < 2 && somenumber > 0) – somenumber needs to be less than 2 AND greater than 0 (so basically 1 if we're talking about integers).
- If it's enough that some of the conditions are met, you use the logical OR operator ||.
  - if (somenumber > 2 || somenumber < 0) – somenumber needs to be greater than 2 or less than 0 (so basically anything but 0-2).
- If none of the conditions can be met, we use the logical NOT operator !.
  - if (!somenumber > 2) – somenumber cannot be greater than 2.

How would you format the following criterion:
1. x needs to be within range 1-10
2. x needs to be outside range 1-10
3. x needs to be within and y outside range 1-10
Verify with the console.*/

let x = 5;
let y = 15;

if (x >= 1 && x <= 10) {
  console.log("x is within the range 1-10");
}

if (x < 1 || x > 10) {
  console.log("x is outside the range 1-10");
}

if (x >= 1 && x <= 10 && (y < 1 || y > 10)) {
  console.log("x is within the range 1-10 and y is outside the range 1-10");
}

// Switch Case. If you have a lot of branches in your if, you might want to use switch instead.

switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}

/*What is the decision based on
This is what happens if the expression is x
Don't forget break if only one case can happen
This is what happens if the expression does NOT match any of the given cases

Open up the code for Task 4 where we created our first if statement.
Now switch it to use switch instead.
*Functionality stays the same*/

readline.question("Please enter a number: ", (number) => {
  switch (number) {
    case "0":
      console.log("You entered a zero");
      break;
    default:
      console.log("You entered something else");
      break;
  }
  readline.close();
});

/* Last time we learned to read input from the user with process.stdin.on(). To read multiple inputs, say several numbers, from the user, we can use the same command.
- Ask the user to give their input with a specific delimiter (space).
- Once the input is read, we split it with the command split().
- We can use split string parts with square brackets [].
- Each part has an index, starting from 0.*/

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "Please enter multiple numbers separated by space: ",
  (input) => {
    const numbers = input.split(" ");
    numbers.forEach((num, index) => {
      console.log(`Number at index ${index}: ${num}`);
    });
    readline.close();
  }
);

/* By Now, Make Sure You Understand These:
- What conditionals are for and how to write them.
- Comparison operators <, >, !=, ==, ===, !==, <=, >=.
- Logical operators AND, OR, and NOT.
- How to run scripts in VSCode and how to stop them.*/
