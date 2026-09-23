// Lab 6 - Conditionals & Comparisons
// Name: Iman Zahroony

// Grade calculator
let score = Number(prompt("Enter your score (0-100):"));

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("F");
}

// Age check
let age = Number(prompt("Enter your age:"));

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Custom check
let isMember = prompt("Are you a member? yes or no");

if (isMember === "yes") {
    console.log("Member benefits applied");
} else {
    console.log("No membership");
}

