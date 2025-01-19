// Functions

/* What Is a Function?
- As the code gets more complex, it gets more:
  - Hard to read
  - Hard to maintain
- We should divide the functionality into smaller chunks of code.
- Function is a small sub-program.
- Collection of functionality.
- Typically completes one specific task
- Helps avoid repetition.
- Like a little helper
  - Specific function
  - Specific name
  - Can call other helpers*/

/* When to Use a Function?
- If you’re using the same chunk of code more than once -> consider implementing a method.*/

/* Functions / Methods / Procedures / Subroutines
- You might have also heard terms method, procedure, or subroutine. All of them are sometimes used interchangeably with function.
- Strictly speaking, a method is a function stored as an object property.
- We will get back to these when we learn about classes and objects.*/

/* How to Use Functions?
- No need to re-invent the wheel! Learn to use ready-made methods.
  - process.stdout.write("Hello");
  - console.table();
- Learn to read the documentation to understand how the methods work and how to use them:
  - What are the input parameters?
  - What is the return value?*/

/* How to Call a Function?
- To call a function, you simply need the name, parenthesis, and possible input.
- Parenthesis are needed even when no input is passed.
- If you leave them out, you will get the function object instead of the return value.*/

let fullname = getFullName(firstname, lastname); // Function call

/* Function: Syntax
- In JavaScript, defining functions is pretty straightforward; at the simplest, all you need is the keyword function, a name, and parenthesis.*/

function myFunction() {} // Function implementation inside braces

/* Function: Input
- Whenever a function needs some input (i.e. function needs something from the caller), you need to define input parameters for the function.
- Input parameters are described within parenthesis and separated by commas.
- Number of parameters is not limited (0-n).
- Note! You need parenthesis even if there aren't any parameters.*/

function getFullName(firstname, lastname) {} // Function implementation inside braces

/* Function: Input
- In JS, input parameters are always passed by value -> actions in function do not affect the passed variables.*/

/* Function: Output
- Sometimes function gives output (i.e. caller needs something from the function).
- Output is implemented using keyword return.*/

function getFullName(firstname, lastname) {
  return firstname + " " + lastname;
}

/* By Now, Make Sure You Understand These:
- What functions are for and how to call functions*/

// Example Function Definitions and Calls

// Function that prints out text "Hello!"
function sayHello() {
  console.log("Hello!");
}

// Call the function to test it
sayHello();

// Function that takes two numbers as input, calculates the sum of these two, and prints out the result.
function sumNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log("The sum is: " + sum);
}

// Call the function to test it
sumNumbers(5, 10);

// Function that takes two numbers as input, calculates the sum of given numbers, and returns the result.
function calculateSum(num1, num2) {
  return num1 + num2;
}

// When the function is called, use the returned value to print out the result
let result = calculateSum(5, 10);
console.log("The result is: " + result);

// Additional Example: Function to Calculate Full Name
function getFullName(firstname, lastname) {
  return firstname + " " + lastname;
}

let fullname = getFullName("John", "Doe");
console.log("Full name is: " + fullname);
