// Iman Zahroony
// Lab 9 - Writing and Using Functions
// Description: Practice creating and calling functions


// This function welcomes the user by name.
function greetUser(name) {
    console.log("Hello, " + name + "!");
}

// Ask the user for their name and call the function.
let name = prompt("What is your name?");
greetUser(name);


// This function adds two numbers and returns the total.
function addNumbers(a, b) {
    return a + b;
}

// Ask the user for two numbers and call the function.
let number1 = Number(prompt("Enter the first number:"));
let number2 = Number(prompt("Enter the second number:"));

let total = addNumbers(number1, number2);
console.log("The total is: " + total);


// This function calculates the area of a rectangle.
function calculateArea(length, width) {
    return length * width;
}

// Ask the user for the length and width.
let length = Number(prompt("Enter the length:"));
let width = Number(prompt("Enter the width:"));

let area = calculateArea(length, width);
console.log("The area is: " + area);


