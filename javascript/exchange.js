document.getElementById('exchange-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const wasteType = document.getElementById('waste-type').value;
    const quantity = document.getElementById('quantity').value;

    if (wasteType && quantity > 0) {
        // Kirim data ke backend menggunakan Fetch API
        fetch('http://localhost/M4/api/exchange.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: new URLSearchParams({
                waste_type: wasteType,
                quantity: quantity,
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    document.getElementById('reward-message').textContent = data.message;
                }
            })
            .catch(error => console.error('Error:', error));
    } else {
        document.getElementById('reward-message').textContent =
            'Please select a waste type and enter a valid quantity.';
    }
});
