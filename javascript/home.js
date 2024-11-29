// Search Functionality
const searchInput = document.querySelector('.search-container input');
searchInput.addEventListener('input', function () {
    console.log(`Searching for: ${this.value}`);
});

// Highlight Active Nav Link
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(link => link.style.color = '#333'); // Reset warna
        this.style.color = '#113826'; // Tautan yang diklik
    });
});

// Interactive Sign In/Sign Up
document.querySelector('.sign-in').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Sign In button clicked!');
});

document.querySelector('.sign-up').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Sign Up button clicked!');
});

// Hover Effect for Feature Cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseover', function () {
        this.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    });
    card.addEventListener('mouseout', function () {
        this.style.boxShadow = 'none';
    });
});

