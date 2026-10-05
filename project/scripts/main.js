// Data Array of Objects for Gallery
const portfolioItems = [
    {
        title: "Bespoke Navy Workwear Jacket",
        category: "Workwear",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80",
        description: "Navy-blue groundsman jacket with reinforced stitching and optional reflective safety tape."
    },
    {
        title: "Tailored Cargo Trousers",
        category: "Utility",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80",
        description: "Durable cargo trousers designed for optimal mobility and utility placement."
    },
    {
        title: "Classic Two-Piece Suit",
        category: "Formalwear",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80",
        description: "Custom-fitted formal suit crafted from fine wool blend material."
    }
];

// Base Pricing Data Object
const garmentPricing = {
    jacket: 120,
    trousers: 80,
    suit: 220
};

const fabricMultipliers = {
    standard: 1.0,
    premium: 1.4,
    luxury: 1.8
};

// Function 1: Render Portfolio Items using Template Literals
function renderGallery(items) {
    const galleryContainer = document.getElementById("galleryContainer");
    if (!galleryContainer) return;

    galleryContainer.innerHTML = items.map(item => `
        <article class="card">
            <img src="${item.image}" alt="${item.title}" loading="lazy" width="400" height="220">
            <h3>${item.title}</h3>
            <p><strong>Category:</strong> ${item.category}</p>
            <p>${item.description}</p>
        </article>
    `).join("");
}

// Function 2: Unit Conversion Logic with LocalStorage Persist
function handleUnitConversion() {
    const unitSelect = document.getElementById("unitSelect");
    const valInput = document.getElementById("measureValue");
    const resultBox = document.getElementById("conversionResult");

    if (!unitSelect || !valInput || !resultBox) return;

    const val = parseFloat(valInput.value);
    const unit = unitSelect.value;

    // Persist choice to localStorage
    localStorage.setItem("preferredUnit", unit);

    if (isNaN(val) || val <= 0) {
        resultBox.textContent = "Please enter a valid numeric measurement above 0.";
        return;
    }

    let convertedVal = 0;
    let unitLabel = "";

    if (unit === "inches") {
        convertedVal = val * 2.54;
        unitLabel = "cm";
        resultBox.textContent = `${val} inches is equal to ${convertedVal.toFixed(2)} ${unitLabel}.`;
    } else {
        convertedVal = val / 2.54;
        unitLabel = "inches";
        resultBox.textContent = `${val} cm is equal to ${convertedVal.toFixed(2)} ${unitLabel}.`;
    }
}

// Function 3: Estimate Cost Logic
function calculateEstimate(event) {
    event.preventDefault();

    const type = document.getElementById("garmentType").value;
    const tier = document.getElementById("fabricTier").value;
    const qty = parseInt(document.getElementById("quantity").value, 10);
    const resultBox = document.getElementById("quoteResult");

    if (!type || !tier || isNaN(qty) || qty < 1) {
        resultBox.textContent = "Please complete all selections properly.";
        return;
    }

    const basePrice = garmentPricing[type];
    const multiplier = fabricMultipliers[tier];
    const total = basePrice * multiplier * qty;

    // Template literal formatted output
    resultBox.innerHTML = `Estimated Total Quote: <strong>$${total.toFixed(2)} USD</strong> for ${qty} item(s).`;
}

// Function 4: Save & Restore Form Preferences via LocalStorage
function initLocalStorage() {
    const unitSelect = document.getElementById("unitSelect");
    if (unitSelect) {
        const savedUnit = localStorage.getItem("preferredUnit");
        if (savedUnit) {
            unitSelect.value = savedUnit;
        }
    }
}

// Event Listeners Initialization
document.addEventListener("DOMContentLoaded", () => {
    // Render dynamic gallery on home page
    renderGallery(portfolioItems);

    // Load stored settings
    initLocalStorage();

    // Event listener for Unit Converter button
    const convertBtn = document.getElementById("convertBtn");
    if (convertBtn) {
        convertBtn.addEventListener("click", handleUnitConversion);
    }

    // Event listener for Cost Estimator Form
    const estimatorForm = document.getElementById("estimatorForm");
    if (estimatorForm) {
        estimatorForm.addEventListener("submit", calculateEstimate);
    }

    // Handle Commission Form Submission Feedback
    const commissionForm = document.getElementById("commissionForm");
    if (commissionForm) {
        commissionForm.addEventListener("submit", (e) => {
            const feedback = document.getElementById("formFeedback");
            if (feedback) {
                feedback.style.display = "block";
                feedback.innerHTML = `Thank you! Your commission specifications have been recorded.`;
            }
        });
    }
});