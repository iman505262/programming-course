// Week 11 Homework - DOM Events
// Name: Iman Zahroony

// 1. Find the theme button.
const themeButton = document.getElementById("themeToggle");

// Listen for a click to switch between light and dark themes.
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    console.log("Theme changed!");
});

// 2. Find the Add Item button and the list.
const addBtn = document.getElementById("addItem");
const list = document.getElementById("items");

let counter = 1;

// Add a new creative item every time the button is clicked.
addBtn.addEventListener("click", () => {
    const newItem = document.createElement("li");

    newItem.textContent = "My Favorite Thing " + counter;

    list.appendChild(newItem);
    counter++;

    console.log("A new item was added.");
});

// 3. Remove a list item when it is clicked.
list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.remove();
        console.log("An item was removed.");
    }
});

// 4. Find the paragraph for keyboard output.
const keyOutput = document.getElementById("keyOutput");

// Show which key was released.
document.addEventListener("keyup", (event) => {
    keyOutput.textContent = "You pressed: " + event.key;
});
