// Lab #7 - Practicing Loops
// This program practices for loops, user input, and a triangle pattern.

// Task 1 - Counting Loop
// This loop starts at 1 and counts up to 10.
// i++ adds 1 each time the loop runs.

for (let i = 1; i <= 10; i++) {
    console.log("Number: " + i);
}


// Task 2 - User Input Loop
// Ask the user for a number and convert the answer to a number.

let num = Number(prompt("Pick a number:"));

// This loop counts from 1 up to the number the user entered.

for (let i = 1; i <= num; i++) {
    console.log("Count: " + i);
}


// Task 3 - Triangle Pattern
// Start with an empty string.
// Each loop adds one more # to the string.
// Then it prints the current line.

let triangle = "";

for (let line = 1; line <= 7; line++) {
    triangle += "#";
    console.log(triangle);
}