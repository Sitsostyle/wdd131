
// Populate copyright year
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Populate last modified date and time
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Hamburger menu toggle logic
const mainNav = document.querySelector('.navigation');
const hamburgerButton = document.querySelector('#menu');

hamburgerButton.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
});