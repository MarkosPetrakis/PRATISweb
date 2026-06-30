// --- Interactive Search (Searches titles and descriptions) ---
function searchProducts() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const brands = document.querySelectorAll('.brand-card');

    brands.forEach(brand => {
        // Search both the title (h3) and the description (p)
        const textContent = brand.textContent.toLowerCase();
        if (textContent.includes(query)) {
            brand.style.display = 'block';
        } else {
            brand.style.display = 'none';
        }
    });
}

// --- Enhanced Project Estimator ---
function calculateTiles() {
    const width = parseFloat(document.getElementById('room-width').value);
    const length = parseFloat(document.getElementById('room-length').value);
    const sqmPerBox = parseFloat(document.getElementById('sqm-per-box').value);
    const resultArea = document.getElementById('calculator-result');

    if (isNaN(width) || isNaN(length) || isNaN(sqmPerBox) || width <= 0 || length <= 0 || sqmPerBox <= 0) {
        resultArea.style.display = 'block';
        resultArea.style.borderLeftColor = 'red';
        resultArea.innerHTML = `<p style="color: red;">Please enter valid, positive numbers.</p>`;
        return;
    }

    const totalSqm = width * length;
    const totalSqmWithWaste = totalSqm * 1.10;
    const boxesNeeded = Math.ceil(totalSqmWithWaste / sqmPerBox);

    resultArea.style.display = 'block';
    resultArea.style.borderLeftColor = 'var(--color-gold)';
    resultArea.innerHTML = `
        <h3 style="font-family: var(--font-heading); color: var(--color-gold); margin-bottom: 10px;">Estimation Complete</h3>
        <p>Net Area: <strong>${totalSqm.toFixed(2)} m²</strong></p>
        <p>Area with 10% Waste Buffer: <strong>${totalSqmWithWaste.toFixed(2)} m²</strong></p>
        <p style="font-size: 1.2rem; margin: 15px 0;">Total Requirement: <strong>${boxesNeeded} Boxes</strong></p>
        <button class="btn-trade" onclick="window.location.href='#contact'" style="margin-top: 15px;">Request Quote for ${boxesNeeded} Boxes</button>
    `;
}