// Base pricing data objects
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

/**
 * Handles unit conversion between Inches and Centimeters
 * Stores user's preferred unit in localStorage
 */
function convertMeasurement() {
    const unitSelect = document.getElementById("unitSelect");
    const valueInput = document.getElementById("measureValue");
    const resultBox = document.getElementById("conversionResult");

    if (!unitSelect || !valueInput || !resultBox) return;

    const rawValue = parseFloat(valueInput.value);
    const selectedUnit = unitSelect.value;

    // Save selected unit preference to localStorage
    localStorage.setItem("sitsostyle_preferred_unit", selectedUnit);

    if (isNaN(rawValue) || rawValue <= 0) {
        resultBox.textContent = "Please enter a valid positive number for conversion.";
        return;
    }

    let convertedValue = 0;
    let targetUnit = "";

    // Conditional branching based on unit selected
    if (selectedUnit === "inches") {
        convertedValue = rawValue * 2.54;
        targetUnit = "cm";
        resultBox.textContent = `${rawValue} inches = ${convertedValue.toFixed(2)} ${targetUnit}`;
    } else {
        convertedValue = rawValue / 2.54;
        targetUnit = "inches";
        resultBox.textContent = `${rawValue} cm = ${convertedValue.toFixed(2)} ${targetUnit}`;
    }
}

/**
 * Calculates custom garment estimate based on garment type, fabric tier, and quantity
 */
function calculateQuoteEstimate(event) {
    event.preventDefault();

    const garmentSelect = document.getElementById("garmentType");
    const fabricSelect = document.getElementById("fabricTier");
    const quantityInput = document.getElementById("quantity");
    const quoteResult = document.getElementById("quoteResult");

    if (!garmentSelect || !fabricSelect || !quantityInput || !quoteResult) return;

    const garmentType = garmentSelect.value;
    const fabricTier = fabricSelect.value;
    const quantity = parseInt(quantityInput.value, 10);

    // Validate user inputs
    if (!garmentType || !fabricTier || isNaN(quantity) || quantity < 1) {
        quoteResult.textContent = "Please select all options and enter a valid quantity.";
        return;
    }

    // Calculate base price using data objects
    const basePrice = garmentPricing[garmentType] || 0;
    const multiplier = fabricMultipliers[fabricTier] || 1.0;
    const totalCost = basePrice * multiplier * quantity;

    // Use template literals for formatting output string
    quoteResult.innerHTML = `
    Estimated Total: <strong>$${totalCost.toFixed(2)} USD</strong><br>
    <small>(${quantity}x ${garmentType.toUpperCase()} with ${fabricTier.toUpperCase()} fabric rate)</small>
  `;
}

/**
 * Restores user preferences from localStorage upon page load
 */
function restorePreferences() {
    const savedUnit = localStorage.getItem("sitsostyle_preferred_unit");
    const unitSelect = document.getElementById("unitSelect");

    if (savedUnit && unitSelect) {
        unitSelect.value = savedUnit;
    }
}

// Attach Event Listeners on DOM Load
document.addEventListener("DOMContentLoaded", () => {
    restorePreferences();

    const convertBtn = document.getElementById("convertBtn");
    if (convertBtn) {
        convertBtn.addEventListener("click", convertMeasurement);
    }

    const estimatorForm = document.getElementById("estimatorForm");
    if (estimatorForm) {
        estimatorForm.addEventListener("submit", calculateQuoteEstimate);
    }
});