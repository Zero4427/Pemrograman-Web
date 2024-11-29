document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        // Simulate login success or failure
        alert(`Logging in with Email: ${email} and Password: ${password}`);
    } else {
        alert("Please fill in both fields.");
    }
});
