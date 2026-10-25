
console.log("DOM HW loaded");

// Select the title and main section
const titleEl = document.getElementById("pageTitle");
const mainEl = document.getElementById("mainSection");

// Update the title text
titleEl.textContent = "Chelsea FC - Powered by JavaScript";

// Select and update the introduction
const introEl = document.querySelector(".intro");
introEl.textContent = "I enjoy watching soccer and Chelsea FC!";

// Select all buttons
const buttons = document.querySelectorAll("button");
console.log(buttons);

// Select the image
const imgEl = document.getElementById("teamImage");
imgEl.alt = "Chelsea FC stadium";

// My favorite soccer players
const players = [
    { name: "Cole Palmer", info: "Attacking player" },
    { name: "Reece James", info: "Defender" },
    { name: "Enzo Fernandez", info: "Midfielder" },
    { name: "Robert Sanchez", info: "Goalkeeper" }
];

// Select the list
const listEl = document.getElementById("playerList");

// Add players to the page
players.forEach((player) => {
    const li = document.createElement("li");
    li.textContent = `${player.name} - ${player.info}`;
    listEl.appendChild(li);
});

// Toggle the highlight style
const highlightBtn = document.getElementById("highlightButton");

highlightBtn.addEventListener("click", () => {
    mainEl.classList.toggle("highlight");
});

// Swap between the two soccer pictures
const imageBtn = document.getElementById("imageButton");

let swapped = false;

imageBtn.addEventListener("click", () => {
    if (!swapped) {
        imgEl.src = "soccerball.jpg";
        imgEl.alt = "Soccer ball on the field";
        swapped = true;
    } else {
        imgEl.src = "stadium.jpg";
        imgEl.alt = "Chelsea FC stadium";
        swapped = false;
    }
});

// Change the extra paragraph text and color
const messageEl = document.getElementById("teamMessage");

messageEl.textContent = "Chelsea FC is a great team!";
messageEl.style.color = "blue";
