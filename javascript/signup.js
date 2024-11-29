document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validasi form
    if (!username || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    const userData = {
        username: username,
        email: email,
        password: password
    };

    fetch('http://localhost/Poetik/api/create.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)  // Pastikan ini berupa JSON yang valid
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.message) {
            alert('User created successfully!');
        } else {
            console.error('Error:', data.error);  // Tampilkan error jika ada
        }
    })
    .catch(error => console.error('Error:', error));
});
