// Conditionals

/* What Is a Loop?
- As a programmer, you want to be lazy and avoid repetition.
- If you need the same or similar code multiple times in a row, use a loop.
- There are multiple loop structures in JS you can use:
  - while: Condition is checked before the code is run.
  - do…while: Condition is checked after the code is run.
  - for: Utilizes an iterator variable.
- Each of these has their purpose; learn the differences to choose the best one for the situation at hand.*/

// While, Do While

/* while
- Condition is checked before the code is run.
- Example:*/

let currentDepth = 0;
let neededDepth = 5;
while (currentDepth < neededDepth) {
  process.stdout.write("Keep digging!");
  currentDepth++;
}

/* do…while
- Condition is checked after the code is run.
- Example:*/

currentDepth = 0;
neededDepth = 5;
do {
  process.stdout.write("\nKeep digging!");
  currentDepth++;
} while (currentDepth < neededDepth);

/* When to use while and do…while?
- while: When you have to check the condition before executing the code. In some scenarios, the code might never be run.
- do…while: When you always want to run the code at least once.*/

/* For is a good choice for scenarios where the number of repetitions is known beforehand and doesn't depend on user input.
- Syntax is not quite as intuitive as the one for while and do…while so at first, you might not like it as much.
- Example:*/

for (let i = 0; i < 5; i++) {
  document.write(i);
}

/*  - You can also nest loops.
    - Example:*/

for (let i = 0; i < 5; i++) {
  document.write("<p>");
  for (let j = 0; j < 5; j++) {
    document.write(i + "." + j + " ");
  }
  document.write("</p>");
}

/* By Now, Make Sure You Understand These:
- What loops are
- Which one to use
- How to use them*/
