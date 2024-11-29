// Fungsi untuk mengambil data partner dari API dan menampilkannya
async function fetchPartners() {
    try {
        const response = await fetch('http://localhost/Poetik/api/signup.php');  // URL API yang telah dibuat
        if (!response.ok) throw new Error("Failed to fetch partners");

        const data = await response.json();  // Mengubah respons menjadi format JSON

        if (data.success && data.partners.length > 0) {
            displayPartners(data.partners);  // Menampilkan data partner di HTML
        } else {
            document.getElementById('partners-container').innerHTML = "<p>No partners found.</p>";
        }
    } catch (error) {
        console.error('Error fetching partners:', error);
    }
}

// Fungsi untuk menampilkan data partner di halaman
function displayPartners(partners) {
    const partnersContainer = document.getElementById('partners-container');
    partnersContainer.innerHTML = "";  // Kosongkan area partner sebelum menambah yang baru

    partners.forEach(partner => {
        const partnerItem = `
            <div class="partner-item">
                <img src="${partner.image_url}" alt="Partner Image">
            </div>
        `;
        partnersContainer.innerHTML += partnerItem;
    });
}

// Panggil fungsi fetchPartners saat halaman dimuat
document.addEventListener('DOMContentLoaded', fetchPartners);
