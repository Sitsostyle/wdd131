document.addEventListener("DOMContentLoaded", () => {
    // Retrieve existing count or default to 0
    let count = Number(localStorage.getItem("reviewCounter")) || 0;

    // Increment counter
    count += 1;

    // Save updated count back to localStorage
    localStorage.setItem("reviewCounter", count);

    // Display count on page
    document.getElementById("reviewCount").textContent = count;

    // Footer Year
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Last Modified
    document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
});