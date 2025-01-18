/* Variables, Operators, Read & Write

What are the following?
- npm - Node Package Manager, used to manage the JavaScript packages.
- Node.js - A JavaScript runtime built on Chrome's V8 engine.
- JavaScript - A programming language commonly used for web development.
- npm init - Initializes a new Node.js project.
- node first.js - Runs the JavaScript file named first.js using Node.js.
- terminal - A command line interface for interacting with the system.
- VSCode - Visual Studio Code, a code editor.

What Is a Variable?
A variable is a named storage for a changing value. Values can be e.g. numeric (12) or text ("John").

How to Create a Variable?
Creating a variable in JavaScript is easy. All you need is a name for your variable and the keyword let.*/

let age; // Creates a variable called age. At this point, the value of the variable is not defined, i.e., it’s undefined.

/* How to Name a Variable?
- Names should always be as descriptive as possible.
- Variable names are case-sensitive (name and Name are different variables).
- In JS, use camelCase for variable names (firstName). This means starting with a lower case letter and all consecutive words start with an upper case letter.
- Variable names cannot be reserved words of the programming language.
- Variable names cannot start with a number.

Node.js & VSCode – Getting Started
- For Node.js development in Visual Studio Code, you will mainly use the editor and terminal.
  - Editor is where you write the code.
  - Terminal is where you run commands.

Running Node.js scripts in terminal:
node [filename]: Runs a specific script. for example, node first.js.
Ctrl+c: Abort a running script.*/



/* Task 2: Our First Variable
1. Open your first.js file in VSCode.
2. Create a variable called age.
3. Use console.log(age) to print out the value.*/

let age; // Step 2: Create a variable called age
console.log(age); // Step 3: Print out the value (which is undefined at this point)

// NOTE: = is the assignment operator, unlike in mathematics. Comparison operator, on the other hand is == or ===.

/* What Is a Variable?
In JavaScript (and many other languages) the value to a variable is defined by an assignment operator, the equal sign (=).
Value can also be set when variable is created.*/

let age = 23; // Creates a variable called age and assigns the value 23 to it.



/* Task 3: What Is the Value of a Variable?
1. In your first.js file create a variable called age.
2. Assign your age as a value to the variable age.
3. Use console.log(age) to print out the value.
4. Run your code with node first.js command.
5. Change the value and check again.*/

let age = 24; // Step 1 and 2: Create a variable called age and assign your age to it.
console.log(age); //* Step 3: Print out the value.

/* Step 4: To run the code type node first.js in terminal.
Step 5: Change the value and check again. */
age = 25;
console.log(age);

/* Variable Data Types
In many programming languages, whenever you create a variable, you need to define what sort of data it’s going to store (numeric/text/date..). JavaScript, however, is dynamically typed language where the data type will be defined by the value assigned to a variable.*/

let age = 23; // Value is numeric -> variable is numeric.
let myVariable; // datatype: undefined.
myVariable = 2; // datatype: number.
myVariable = "2"; // datatype: String.

/* String Values
- Text values are called strings.
- They are always enclosed in quotes.
- Strings can be concatenated (combined) with a plus sign.*/

let name = "Jane"; // String value -> enclose in quotes.
console.log("Hello " + name); // Concatenation.

// Note! "2" and 2 are different although they look the same!



/* Task 4: Combining Variables
1. In first.js file in VSCode.
2. Create the following variables:
   1. Course name
   2. Amount of credits
   3. Start date
3. Set the values to be according to this course.
4. Print out "You are studying [course name]. Course has started on [start date] and it is worth [credits] credits."
5. Run your code with node first.js command.*/

let courseName = "Introduction to Programming"; // Step 1: Create a variable for course name.
let credits = 5; // Step 2: Create a variable for amount of credits.
let startDate = "January 18, 2025"; // Step 3: Create a variable for start date.
console.log(`You are studying ${courseName}. Course has started on ${startDate} and it is worth ${credits} credits.`); // Step 4: Print out the information.
// Step 5: To run the code: node first.js.

/* Variable Scope
- Variables can be used for a variety of purposes.
- A variable might be needed only for a limited period of time or for the whole duration of a program, or anything in between.
- To limit visibility of a variable, we have scopes.
- With scope, you can define where your variable is visible.
- To avoid unwanted side effects and mishaps it’s good to have as limited scope for your variables as possible.*/

/* Variable Scope
Name    Scope           Note
global  Not recommended
var     function        You will see this a lot, it’s because there was a time when let wasn’t available.
let     block           Since ES6 (2015).
const   block           This value cannot be changed. Names in UPPERCASE.*/

function myFunction() {
    if (true) {
        var tmp = 123;
    }
    console.log(tmp); // Prints out 123
}

function anotherFunction() {
    if (true) {
        let tmp = 123;
    }
    console.log(tmp); // Prints out an error because tmp is not defined.
}

const FOO; // Prints out an error because you need to assign a value to a constant.
const BAR = 123;
BAR = 456; // Prints out an error because you cannot change the value of a constant.

/* Variable Scope
We will get back to this, don’t worry!
For now, it’s enough that you:
- know there are different scopes.
- know what scope means.
- know how to use let.
- understand if you see a var.
Rule of thumb: always use let unless it’s a constant.*/

/* Operators
Arithmetic Operators:
- You can use arithmetic operators +, -, *, /, % (modulo, jakojäännös) to alter a value.
- You can also use ++ to increment or -- to decrement the value by one.*/

let x = 5, y = 10, z = 15;
console.log(x + y); // Prints out 15
console.log(y - x); // Prints out 5
console.log(x * y); // Prints out 50
console.log(y / x); // Prints out 2
console.log(x % 2); // Prints out 1

x++;
console.log(x); // Prints out 6 because x is now 6
x--;
console.log(x); // Prints out 5 because x is now 5

// These don’t change the value of a variable. These change the value.



/* Task 5: Arithmetic Operators
1. Copy the code from the previous slide in your first.js file.
2. What are the values of x, y and z and why?*/

let x = 5, y = 10, z = 15;
console.log(x + y); /* 15, because 5 + 10 = 15 */
console.log(y - x); /* 5, because 10 - 5 = 5 */
console.log(x * y); /* 50, because 5 * 10 = 50 */
console.log(y / x); /* 2, because 10 / 5 = 2 */
console.log(x % 2); /* 1, because 5 % 2 has a remainder of 1 */

x++;
console.log(x); /* 6, because x was incremented by 1 */

x--;
console.log(x); /* 4, because x was decremented by 1 */

/* Arithmetic Operators
As you probably noticed, the plus sign is used for addition (numeric) and concatenation (strings).
This sometimes causes interesting situations.
To decide which to do, the interpreter will check the data type of the variable values:
- If both are strings -> concatenate
- If both are numeric -> addition
- If there are both -> addition where possible, then concatenate.
- If you have a numeric value stored as a string "32" you can force it to be a number by Number("32").*/



/* Task 6: Concatenate or Addition?
1. In your editor, define the following variables:
   1. let x = 5;
   2. let y = "5";
   3. let z = 3;
2. What are the values of the following statements:
   1. x + y
   2. x + z
   3. y + z
   4. x + y + z
   5. x + z + y
3. What do you need to do to get the value of the 5th calculation to be 13?*/

let x = 5; // is a number
let y = "5"; // is a string
let z = 3; // is a number

console.log(x + y); // "55", because x is a number and y is a string, so they are concatenated.
console.log(x + z); // 8, because both x and z are numbers.
console.log(y + z); // "53", because y is a string and z is a number, so they are concatenated.
console.log(x + y + z); // "553", because x + y results in "55" (concatenation) and then "55" + z results in "553".
console.log(x + z + y); // "85", because x + z results in 8 (addition) and then 8 + y results in "85" (concatenation).
console.log((x + z) + Number(y)); // To get the value of the 5th calculation to be 13, we need both x and z to be numbers before adding y as a string.

/* Read & Write
CLI vs. GUI
CLI (a Command Line Interface)
- Character based interface where all interaction happens with characters.
- Used to be the only option up till 1970's.
Fast & powerful: With great power comes great responsibility — Be careful!
GUI (Graphical User Interface)
- Use of windows & mouse.
- Easy to use
In this repository, we will be mostly working with CLI applications.*/

/* Process
Process is an operating system related term. Each program running on a computer is a process.
A process consists of the following:
- The source code
- Memory allocated for it
- Files/sockets it has open
- Threads (one or more)
- When the process ends, OS handles cleaning up its resources. 
A process is a program in execution*/

/* Process in Node.js
In Node.js we have a module called process that includes methods we can use overall processes. For example: process.exit() can be used to exit a program. Full documentation can be found in: https://nodejs.org/api/process.html */

/* Writing
Process has a stream property called stdout. Stdout has a method called write. Don't worry if you don't fully understand this; just know you can write output using process.stdout.write(). To add a new line with write you can add \n (process.stdout.write("Hello \nworld!")).*/

process.stdout.write("Hello world!\n"); // Prints out "Hello world!" and moves to the next line.
// Writing write() method takes only strings as a parameter. You can convert a number into a string with toString() method.
let number = 1;
process.stdout.write(number.toString()); // Needs to be a string



/* Task 8: First Variables & Operators
1. Continue from the previous task and change the console.log() to be process.stdout.write().
2. (If VS Code doesn't suggest process, try running npm install --save-dev @types/node to install Node.js type definitions.)
3. Run the program.*/

let x = 5, y = 10, z = 15;
process.stdout.write((x + y).toString() + "\n"); // Prints out 15
process.stdout.write((y - x).toString() + "\n"); // Prints out 5
process.stdout.write((x * y).toString() + "\n"); // Prints out 50
process.stdout.write((y / x).toString() + "\n"); // Prints out 2
process.stdout.write((x % 2).toString() + "\n"); // Prints out 1

x++;
process.stdout.write(x.toString() + "\n"); // Prints out 6

x--;
process.stdout.write(x.toString() + "\n"); // Prints out 5

//* Reading: To read something in Node.js we utilise the same object process. The syntax for reading is a bit more complex than writing:

process.stdin.on("data", function(inputFromUser) {
    // The statements below will be executed automatically after the user has typed in something.
    let givenInput = inputFromUser;
    process.exit();
});

/* Commenting: Commenting your code is one of the tasks programmers should get into the habit of doing.
- It will be easier for other people to understand your code.
- It will help yourself when you get back to your code after a break.
- Comments don’t affect how your code is executed, they're there just to give additional info.
- In JS you can create comments in the following way: */
// one line comment can be created with two slashes (//)
// a multi-line comment can be created with /* and */ (like this) "/* this is a comment */"



/* Task 9: Hello You!
The goal is to make the code ask for the user's name and then print out "Hello [name]"
1. First, design the steps needed for the program by writing comments.
2. Then write the actual code.
3. Test the program.
4. What happens if you leave out process.exit()?*/

/* 1. Design the steps needed for the program by writing comments
- Ask for the user's name
- Print out "Hello [name]"
2. Write the actual code*/

process.stdout.write("Please enter your name: ");
process.stdin.on("data", function(inputFromUser) {
    let name = inputFromUser.toString().trim();
    process.stdout.write(`Hello ${name}\n`);
    process.exit(); // If you leave out process.exit(), the program will continue to wait for more input.
});

/* Output Formatting
To format output, you can use the utility package. To add a package in your code, you can use require: const util = require("util"); 
Full documentation of util package: https://nodejs.org/api/util.html 
util.format can be used to create parameterized output. %d (number) and %s (string) marks a place where parameter values are inserted. To define how many decimals a number shows, you can use toFixed(numberOfDecimals).*/

const util = require("util");
let number1 = 5.12345;
let number2 = 10.6789;

process.stdout.write(util.format("\nFirst number is %d and second number is %d.\n", number1.toFixed(2), number2));

/* By Now, Make Sure You Understand These
What is a variable?
How to use a variable?
Basic operators (+, -, ++, --, *, /, %, =, ==)
How to read and write with Node.js*/
