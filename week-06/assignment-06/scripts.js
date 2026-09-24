// Week 6 Homework - Themed Logic with User Input
// Name: Iman Zahroony
// Theme: Video Games

// Ask the user how many games they have played
let gamesPlayed = Number(prompt("How many Resident Evil games have you played?"));

// Ask the user if they like horror games
let likesHorror = prompt("Do you like horror games? yes or no");

// Ask the user if they are a Resident Evil fan
let isFan = prompt("Are you a Resident Evil fan? yes or no");

// Check the number of games played
if (gamesPlayed >= 5) {
    console.log("You have played many Resident Evil games.");
} else {
    console.log("You have played fewer than 5 Resident Evil games.");
}

// Check if the user likes horror games
if (likesHorror === "yes") {
    console.log("You might enjoy Resident Evil.");
} else {
    console.log("Resident Evil may not be your favorite type of game.");
}

// Nested if: check if the user is a fan and has played enough games
if (isFan === "yes") {
    if (gamesPlayed >= 5) {
        console.log("You are a big Resident Evil fan.");
    } else {
        console.log("You are a Resident Evil fan, but you have not played many games.");
    }
} else {
    console.log("You are not a Resident Evil fan.");
}