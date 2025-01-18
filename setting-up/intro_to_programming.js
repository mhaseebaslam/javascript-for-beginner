// Section 1: What Is a Program?
/* 
Programs are detailed instructions for a computer to follow. They can take many forms, such as:
  - Desktop applications (e.g., calculator, media player)
  - Office software (e.g., MS Word, MS Excel)
  - Web applications (e.g., e-commerce platforms, Moodle)
  - Mobile applications
  - Operating systems (e.g., Windows, macOS)
  - Command line tools (e.g., Ping, Tracert)
  - Drivers (e.g., printer drivers)
  - Embedded systems (e.g., washing machines)
*/

// Example: Simple Program in JavaScript
console.log("Hello, world!"); // This line prints a message to the console.

/* 
Section 2: What Is Programming?

Programming is:
- Writing detailed instructions for a computer (similar to a cooking recipe).
- Turning ideas into software to solve problems.
*/

// Example: Simple Arithmetic Program
function addTwoNumbers(a, b) {
    return a + b;
}
console.log("Sum of 5 and 3 is:", addTwoNumbers(5, 3)); // This will prints output: 8

/*
Section 3: Key Concepts in Programming
- **Decomposition**: Breaking a problem into smaller parts.
- **Patterns**: Identifying similarities between problems.
- **Abstraction**: Focusing on general principles and ignoring details.
- **Algorithm**: A step-by-step approach to solving a problem.
*/

// Example: Decomposition and Algorithm
function findLargestNumber(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}
console.log("Largest number in the array:", findLargestNumber([5, 8, 2, 9, 3])); // This will prints output: 9 beacuse 9 is the largest number in the array

/*
Section 4: Steps in Programming
1. Receive and understand the task.
2. Break the task into logical steps.
3. Write the steps in a programming language.
4. Run, debug, and verify the program.
5. Fix errors and refine as needed.
6. Repeat and improve.
*/

// Example: Debugging Example
function calculateAverage(numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total / numbers.length; // Average = total / count
}
console.log("Average is:", calculateAverage([10, 20, 30]));

/*
Section 5: Programming Languages
- Computers only understand binary (0s and 1s), but programming languages help bridge the gap.
- Languages like JavaScript, Python, and Java allow humans to write more readable instructions.
*/

// Example: Program Comparison
console.log("This is JavaScript!"); // JavaScript example

// Section 6: Special Characters in Programming Languages
/* 
Common special characters include:
  - ; (semicolon): Ends a statement.
  - {} (curly braces): Enclose code blocks.
  - "" or '': Denote strings.
  - (): Enclose function parameters.
  - []: Work with arrays.
*/

// Example: Using Special Characters
let array = [1, 2, 3];
for (let i = 0; i < array.length; i++) {
    console.log(`Array element at index ${i}:`, array[i]); // Template literals use backticks (`) for embedding variables
}

/*
Section 7: Why Study Programming?
- Programming improves logical thinking and problem-solving.
- It’s a fun and valuable skill in the digital world.
*/

// Final Example: Fun Program
function fizzBuzz(limit) {
    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(15); // Play FizzBuzz up to 15!

/*
Happy Coding!
Explore and experiment with this repository to enhance your programming skills.
*/