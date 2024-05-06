document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
    } else {
        // Here you can handle the registration process, for example, sending the data to a server
        alert("Registration successful!");
        // Redirect to another page after successful registration if needed
    }
});
