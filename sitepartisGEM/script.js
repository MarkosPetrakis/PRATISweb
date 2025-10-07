// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', (event) => {

    // --- Interactive Search Function for Brands ---
    window.searchProducts = function() {
        // Get the search query and convert to lower case
        const query = document.getElementById('search-bar').value.toLowerCase();
        
        // Get all the brand cards
        const brands = document.querySelectorAll('.product-card');

        brands.forEach(brand => {
            const name = brand.querySelector('h3').textContent.toLowerCase();
            // If the brand name includes the query, make sure it's visible
            if (name.includes(query)) {
                brand.classList.remove('hidden');
            } else {
                // Otherwise, hide it by adding the 'hidden' class
                brand.classList.add('hidden');
            }
        });
    }

    // --- Project Tile Calculator ---
    window.calculateTiles = function() {
        const width = parseFloat(document.getElementById('room-width').value);
        const length = parseFloat(document.getElementById('room-length').value);
        const sqmPerBox = parseFloat(document.getElementById('sqm-per-box').value);
        const resultArea = document.getElementById('calculator-result');

        // Simple validation to ensure inputs are numbers > 0
        if (isNaN(width) || isNaN(length) || isNaN(sqmPerBox) || width <= 0 || length <= 0 || sqmPerBox <= 0) {
            resultArea.innerHTML = `<p style="color: red;">Please enter valid, positive numbers for all fields.</p>`;
            return;
        }

        const totalSqm = width * length;
        // Add 10% for waste (cuts, breaks, etc.) - a standard practice
        const totalSqmWithWaste = totalSqm * 1.10;
        // Use Math.ceil() to round up, as you can't buy a fraction of a box
        const boxesNeeded = Math.ceil(totalSqmWithWaste / sqmPerBox);

        // Display the result on the page instead of an alert
        resultArea.innerHTML = `
            <h3>Calculation Complete</h3>
            <p>Total Area: <strong>${totalSqm.toFixed(2)} m²</strong></p>
            <p>Recommended Area (including 10% for waste): <strong>${totalSqmWithWaste.toFixed(2)} m²</strong></p>
            <p>You will need approximately <strong>${boxesNeeded} boxes</strong> of tiles.</p>
        `;
    }
});