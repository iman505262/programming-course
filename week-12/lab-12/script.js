
// Select the form and result section
const form = document.getElementById("contactForm");
const result = document.getElementById("result");

// Listen for form submission
form.addEventListener("submit", function(event) {

    event.preventDefault(); // Stops page refresh

    // Get values from the inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const age = document.getElementById("age").value;

    // Display the information on the page
    result.innerHTML = `
        <h3>Thank you for submitting!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Age:</strong> ${age}</p>
    `;
});


// What does event.preventDefault() actually prevent? It stops the page from refreshing when the user submits the form.

// What does .value return? It gets the information that the user types into the input boxes.

// Why use template literals (${}) instead of string concatenation? It makes it easier to add variables and information inside a string.