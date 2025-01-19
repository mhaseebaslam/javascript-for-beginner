// Arrays

/* Question 1: What Sort of a Variable to Use?
- Consider the following scenario: you need to implement an application to store long jump competition results.
- Each jumper has six tries.
- You need to save the length of each jump.
- What sort of a variable would you use?
- What if there were an unlimited number of tries?*/

// One variable can store one value. When using arrays, we can store multiple values in one variable. You can think of an array as a numbered filing cabinet. You can access the different values stored in an array by using their unique indices. Indexing starts from 0. Arrays are objects.

let numberArray = [1, 5, 2, 8, 9, 4, 3, 7, 6, 0]; // Declare an array. Square brackets denote an array. Items are separated by commas.
console.log(numberArray[8]); // To access a specific value you can use the index, will print out 6
let stringArray = ["red", "blue", "yellow"]; // Arrays can also include string values
console.log(stringArray[2]); // Will print out yellow
console.log(stringArray.length); // To get the number of items in an array you can use Length, will print out 3
console.log(numberArray.length); // Will print out 10

/* Arrays – Looping Through
- Quite often you need to loop through an array.
- For loop is good for this.
- The last value of the array can be found at length-1.*/

for (let i = 0; i < numberArray.length; i++) {
  console.log("Value in index " + i + ": " + numberArray[i]);
}

/* Arrays – Adding Elements
- To add an element into an array you can use push().
- This will add a new item as the last item in the array.
- You can also use unshift() to add a new item. In this case, it will be added as the first item in the array.
- Note! Existing items will now have different indices!*/

stringArray.push("pink"); // Adds "pink" as the last item in the array
stringArray.unshift("purple"); // Adds "purple" as the first item in the array

/* Arrays – Updating Elements
- You can also update elements in an array based on the index by simply assigning a new value.*/

stringArray[0] = "changed"; // Updates the first item to "changed"

/* Arrays – Array Methods
- toString(): converts an array into a string (comma delimited).
- join(delimiter): just like toString() but you can define delimiter.
- pop(): remove the last item.
- shift(): removes the first item.
- sort(): sorts array alphabetically.
- reverse(): reverses array.*/

console.log(stringArray.toString()); // Converts array to string with commas
console.log(stringArray.join("; ")); // Converts array to string with semicolon delimiter
stringArray.pop(); // Removes the last item
stringArray.shift(); // Removes the first item
stringArray.sort(); // Sorts array alphabetically
stringArray.reverse(); // Reverses array

/* Multidimensional Arrays
- You can also create multidimensional arrays (matrices).
- To refer a specific index you use notation matrix[][]. */

let jumps = [
  ["Mike Powell", 8.95, 8.22],
  ["Bob Beamon", 8.9, "x"],
  ["Carl Lewis", 8.87, 8.24],
];
console.log("\nJumper 1: " + jumps[0][0]);
console.log("Length of first jump: " + jumps[0][1]);

/* Multidimensional Arrays - Initialize
- To initialize an array with values you can use new Array() constructor.*/

let matrix = new Array();
for (let i = 0; i < 3; i++) {
  matrix[i] = new Array("Initial value col 1", "Initial value col 2");
}

/* Multidimensional Arrays – Add Items
- To add an element you can use
  - array.push([contents]);
  - array.splice(index, noElementsToRemove, contents);*/

jumps.push(["Tommi Evilä", 8.22, "x"]);
jumps.splice(1, 0, ["Tommi Evilä", 8.22, "x"]);

/*Multidimensional Arrays – Remove Items
- To remove an element you can use
  - array.pop();
  - array.splice(index, noElementsToRemove);*/

jumps.pop();
jumps.splice(0, 1);

/* Multidimensional Arrays - Table
- To easily dump array contents to console you can use console.table(array).*/

console.table(jumps);

/* Multidimensional Arrays - Looping
- Quite often you need to loop through the array. For this you use nested loops.*/

console.log("Results:");
for (let i = 0; i < jumps.length; i++) {
  for (let j = 0; j < jumps[i].length; j++) {
    process.stdout.write("\t" + jumps[i][j]);
  }
  console.log();
}

/* Multidimensional Arrays - Looping
- You can also use forEach() to loop through arrays.*/

console.log("Contents of a matrix as csv:");
jumps.forEach((jump) => {
  process.stdout.write(jump + ",");
});
console.log("\n\n\n");

/* Arrow Function Expression
- In forEach() we use what is called an arrow function expression.
- Arrow functions are like shortened versions of traditional functions.*/

jumps.forEach((jump) => {
  process.stdout.write(jump + ",");
});
jumps.forEach(function printItem(jump) {
  process.stdout.write(jump + ", ");
});

/* By Now, Make Sure You Understand These
- What arrays are
- When to use arrays
- How to use them
- What multidimensional arrays are
- How to use them*/
