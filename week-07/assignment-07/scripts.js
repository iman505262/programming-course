// Week 7 Homework - Loops in Action
// This program uses user input, loops, and conditionals.

// Get two numbers from the user
let start = Number(prompt("Enter a starting number:"));
let end = Number(prompt("Enter an ending number:"));

// Loop 1 - Count from the starting number to the ending number
// This loop prints each number and checks if the number is even or odd.

for (let i = start; i <= end; i++) {

    if (i % 2 === 0) {
        console.log("Number " + i + " is even.");
    } else {
        console.log("Number " + i + " is odd.");
    }
}


// Loop 2 - Build a # pattern
// This loop adds one # each time and prints the new line.

let pattern = "";

for (let line = 1; line <= 5; line++) {
    pattern += "#";
    console.log(pattern);
}

