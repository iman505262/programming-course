console.log("linked")

// Event 1: Click the button to change the page background. (change the page color back and forth.)
const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", function() {
    if (document.body.style.backgroundColor === "lightgreen") {
        document.body.style.backgroundColor = "#e8f0fe";
    } else {
        document.body.style.backgroundColor = "lightgreen";
    }
});

// Event 2: Double-click the heading to change its message.
const message = document.getElementById("message");

message.addEventListener("dblclick", function() {
    message.textContent = "You discovered the double-click event!";
});

// Event 3: Highlight the sentence when the mouse moves over it.
const hoverText = document.getElementById("hoverText");

hoverText.addEventListener("mouseover", function() {
    hoverText.style.backgroundColor = "#fff0b3";
});

// Event 4: Show a greeting when you finish entering your name.
const nameInput = document.getElementById("nameInput");
const output = document.getElementById("output");

nameInput.addEventListener("change", function() {
    if (nameInput.value === "") {
        output.textContent = "Please enter your name.";
    } else {
        output.textContent = "Hello, " + nameInput.value + "!";
    }
});

// Event 5: Display the last key released on the keyboard.
document.addEventListener("keyup", function(event) {
    document.getElementById("keyOutput").textContent =
        "Last key pressed: " + event.key;
});
