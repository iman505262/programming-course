// Week 5 Homework - JavaScript in an External File
// Name: Iman Zahroony
// Date: September 19, 2026
// Description: This program uses variables, math operations,
// string concatenation, and displays a result on the webpage.

// Five variables with different types
let game = "Resident Evil";
let favoriteNumber = 5;
let gamesPlayed = 10;
let likesHorrorGames = true;
let playerName = "Iman";

// Math operation 1
let total = favoriteNumber + gamesPlayed;

// Math operation 2
let remaining = gamesPlayed - favoriteNumber;

// String concatenation 1
let message = playerName + " likes " + game;

// String concatenation 2
let gameMessage = "I have played " + gamesPlayed + " games.";

// Print all results to the console
console.log("Game: " + game);
console.log("Favorite Number: " + favoriteNumber);
console.log("Games Played: " + gamesPlayed);
console.log("Likes Horror Games: " + likesHorrorGames);
console.log("Player Name: " + playerName);
console.log("Total: " + total);
console.log("Remaining: " + remaining);
console.log(message);
console.log(gameMessage);

// This adds a new paragraph to the webpage after the page loads.
// It displays the value stored in the total variable.
window.onload = function() {
    document.body.innerHTML += "<p>Result: " + total + "</p>";
};