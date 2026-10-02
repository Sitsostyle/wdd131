// Footer Dynamic Dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Static Weather Values for Kakum National Park (°C and km/h)
const temperature = 28;
const windSpeed = 12;

/**
 * Calculates Wind Chill factor using Metric units (°C and km/h).
 * Formula: 13.12 + 0.6215*T - 11.37*(V^0.16) + 0.3965*T*(V^0.16)
 */
const calculateWindChill = (temp, speed) =>
    (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);

// Viability Check for Metric: Temperature <= 10 °C AND Wind Speed > 4.8 km/h
const chillElement = document.getElementById("chill");

if (temperature <= 10 && windSpeed > 4.8) {
    chillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    chillElement.textContent = "N/A";
}


// Display the current year in the footer
const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;

// Display the date the document was last modified
document.querySelector("#lastModified").textContent =
    document.lastModified;

// Weather data
const temperature = 28;
const windSpeed = 12;

// Calculate wind chill in Celsius
function calculateWindChill(temp, speed) {
    if (temp <= 10 && speed > 4.8) {
        const windChill =
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(speed, 0.16) +
            0.3965 * temp * Math.pow(speed, 0.16);

        return `${windChill.toFixed(1)} °C`;
    }

    return "N/A";
}

// Display the weather information
document.querySelector("#temp").textContent = temperature;
document.querySelector("#wind").textContent = windSpeed;
document.querySelector("#chill").textContent =
    calculateWindChill(temperature, windSpeed);