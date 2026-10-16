// Iman Zahroony
// Week 9 - Reusable Functions Program
// Description: Practice functions, loops, and conditionals


// This function asks for the user's name and welcomes them.
function greetUser() {
    let name = prompt("What is your name?");
    console.log("Hello, " + name + "!");
}

greetUser();


// This function multiplies two numbers and returns the answer.
function multiplyNumbers(a, b) {
    return a * b;
}

// Ask the user for two numbers and display the answer.
let number1 = Number(prompt("Enter the first number:"));
let number2 = Number(prompt("Enter the second number:"));

let result = multiplyNumbers(number1, number2);
console.log("The answer is: " + result);


// This function uses a loop to create a multiplication table.
// The loop repeats so we do not need to write the same code many times.
function multiplicationTable(number) {
    for (let i = 1; i <= 5; i++) {
        console.log(number + " x " + i + " = " + multiplyNumbers(number, i));
    }
}

// Ask the user which multiplication table they want.
let tableNumber = Number(prompt("Which multiplication table do you want?"));

// This function checks the number and calls the multiplication table function.
function showTable(number) {
    if (number > 0) {
        console.log("Here is your multiplication table:");
        multiplicationTable(number);
    } else {
        console.log("Please enter a number greater than zero.");
    }
}

showTable(tableNumber);
