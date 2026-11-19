/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".newsletter form");
    const input = document.getElementById("email");
    const message = document.querySelector(".message");

    // Use our own validation message instead of the browser's pop-up
    form.noValidate = true;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = input.value.trim();
        const looksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!looksValid) {
            message.textContent = "Please enter a valid email address.";
        } else {
            message.textContent =
                "Thank you! Your email address " + email +
                " has been added to our mailing list!";
            input.value = "";
        }
    });
});
