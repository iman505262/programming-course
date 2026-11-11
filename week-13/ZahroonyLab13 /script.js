// Select the form and input elements
const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");

// Select the error message paragraphs
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");

const successMessage = document.getElementById("successMessage");

// Regex pattern to check email format
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// Function to check the Name field
function validateName() {

    if (nameInput.value.trim() === "") {

        nameError.textContent = "Please enter your name.";
        nameError.className = "error";

        return false;

    } else {

        nameError.textContent = "";
        return true;

    }

}


// Function to check the Email field
function validateEmail() {

    const email = emailInput.value.trim();

    if (email === "") {

        emailError.textContent = "Please enter your email.";
        emailError.className = "error";

        return false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent = "Please enter a valid email address.";
        emailError.className = "error";

        return false;

    } else {

        emailError.textContent = "";
        return true;

    }

}


// Function to check the Age field
function validateAge() {

    const age = ageInput.value;

    if (age.trim() === "") {

        ageError.textContent = "Please enter your age.";
        ageError.className = "error";

        return false;

    } else if (Number(age) < 1) {

        ageError.textContent = "Age must be at least 1.";
        ageError.className = "error";

        return false;

    } else {

        ageError.textContent = "";
        return true;

    }

}


// Check Name when the user leaves the field
nameInput.addEventListener("blur", () => {

    validateName();

});


// Check Email when the user leaves the field
emailInput.addEventListener("blur", () => {

    validateEmail();

});


// Check Age when the user leaves the field
ageInput.addEventListener("blur", () => {

    validateAge();

});


// Check the form when the user clicks Submit
contactForm.addEventListener("submit", (event) => {

    // Stop the page from refreshing
    event.preventDefault();

    // Clear the previous success message
    successMessage.textContent = "";

    // Check all three fields
    const nameValid = validateName();
    const emailValid = validateEmail();
    const ageValid = validateAge();

    // Check if all fields are valid
    if (nameValid && emailValid && ageValid) {

        successMessage.textContent = "Form submitted successfully!";
        successMessage.className = "success";

        // Clear the form after successful submission
        contactForm.reset();

        // Clear old error messages
        nameError.textContent = "";
        emailError.textContent = "";
        ageError.textContent = "";

    }

});
