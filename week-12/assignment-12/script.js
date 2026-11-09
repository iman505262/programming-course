
const form = document.getElementById("pizzaForm");
const result = document.getElementById("result");

// Listen for the form submit event
form.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get information from the input boxes
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const quantity = document.getElementById("quantity").value;

    // Get the selected pizza size
    const size = document.querySelector('input[name="size"]:checked').value;

    // Get all selected toppings
    const toppings = document.querySelectorAll('input[name="topping"]:checked');

    let toppingList = "";

    toppings.forEach(function(topping) {
        toppingList += topping.value + " ";
    });

    // Get the selected crust and message
    const crust = document.getElementById("crust").value;
    const message = document.getElementById("message").value;

    // Display the order information on the page
    result.innerHTML = `
        <h2>Your Pizza Order</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Pizza Size:</strong> ${size}</p>
        <p><strong>Toppings:</strong> ${toppingList || "No toppings selected"}</p>
        <p><strong>Crust:</strong> ${crust}</p>
        <p><strong>Special Instructions:</strong> ${message}</p>
        <h3>Thank you for your order!</h3>
    `;
});
