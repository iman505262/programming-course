
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
