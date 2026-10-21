
console.log("linked");

// Select and modify text
const title = document.getElementById("title");

title.textContent = "Hello from JavaScript!";

// Change text color and font
title.style.color = "blue";
title.style.fontFamily = "Arial, sans-serif";

// Select the main section
const mainSection = document.querySelector(".main");

mainSection.style.backgroundColor = "#f0f0f0";

// Select all paragraphs
const paragraphs = document.querySelectorAll("p");

// Change paragraph text and color
paragraphs.forEach((p, i) => {
    p.textContent = `Paragraph ${i + 1} updated by JS`;
    p.style.color = "green";
});

// Add a button click
const toggleButton = document.getElementById("toggle");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("highlight");
});

// Create an array of links
const resources = [
    { text: "CSI", href: "https://www.csi.edu" },
    { text: "MDN Web Docs", href: "https://developer.mozilla.org" },
    { text: "Eloquent JavaScript", href: "https://eloquentjavascript.net" }
];

// Select the list
const list = document.getElementById("links");

// Clear the list
list.innerHTML = "";

// Create and add the links
for (const item of resources) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = item.text;
    a.href = item.href;
    a.target = "_blank";

    li.appendChild(a);
    list.appendChild(li);
}
