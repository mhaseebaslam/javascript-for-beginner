# Task: Arrays

In this task, you will practice the use of arrays. Follow the instructions given to complete small programming tasks.

## Task 1: Creating and Looping Through an Array

Create a program with the following arrays:

1. an array1 with five items: 5, 7, 32, 31, and 8.
2. an array2 with three items: 12.4, -13.55, and 67.44,
3. an array3 with four items: “Helsinki”, “Lissabon”, “New York”, and “Shanghai”.

Then print out the following:

- “The value in the index number 3 is: “ and the value from the array3.
- “The fourth item in the int array is: “ and the value from the array1.
- “In the array2 there are xx items” where xx is the size of the array2.
- The whole content of the array1 with a loop.
- The whole content of the array2 from the last item to the first.
- Lastly, in a loop go through the array3 and set all the values to be “empty” and print it out as a comma separated string.

## Task 2: Reverse

Create a program that keeps asking the user to input numbers. These numbers are stored in an array. Keep asking till zero is entered. After that, the numbers are printed out in reverse order. Don’t use array methods for this but only simple loops.

## Task 3: Average

Create a program that asks the user for numbers and calculates the average for them. Numbers will be asked till the user enters a letter.
**Hint!** You can check whether a value is numeric with `isNaN()`.

## Task 4: Linear Search

Create a program that finds specific items in an array.

1. Create an array with the following items: 55, 23, 6456, 324, 21, 234, 72, 21.
2. Ask the user what they want to search for in the integer array.
3. Loop through the array and compare the values with the input given by the user.
4. If the item is found, print out in which index the value was found.
5. If the item is not found, print out a message saying the item was not found.

## Task 5: Smallest and Largest with Random Numbers

1. Create a program with a 100-item array that is initialized with random numbers in the range 0-1000.
   - To create random numbers you can use the `Math.random()` function.
2. Find the largest value in the array using a loop and print it out.
3. Find the smallest value in the array using a loop and print it out.

## Task 6: Battleship

Create a 5x5 Battleship game using a multidimensional array. Use asterisks to mark the ships. Ask the user for coordinates to shoot and give feedback to the user whether they hit a ship or not. Keep asking for as long as there are ships left. Keep count of how many shots the player needed.

**Optional:** You can extend and improve the game.

- You can create a bigger array and add bigger ships.
- Limit the number of shots allowed.
- Add functionality for setting the ships in the game.
- etc.
