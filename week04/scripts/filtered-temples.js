// Array of Temple Objects
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2500x1667.jpg"
    },
    {
        templeName: "Bern Switzerland",
        location: "Zollikofen, Switzerland",
        dedicated: "1955, September, 11",
        area: 35500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-653038-wallpaper.jpg"
    }
];

// Element References
const container = document.querySelector(".res-grid");
const heading = document.querySelector("#heading");
const mainNav = document.querySelector("#animatenav");
const menuButton = document.querySelector("#menu");

// Mobile Navigation Toggle
menuButton.addEventListener("click", () => {
    mainNav.classList.toggle("open");
    menuButton.innerHTML = mainNav.classList.contains("open") ? "&chi;" : "&#9776;";
});

// Dynamic Card Renderer
function createTempleCard(filteredTemples) {
    container.innerHTML = "";

    filteredTemples.forEach((temple) => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">LOCATION:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">DEDICATED:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">SIZE:</span> ${temple.area.toLocaleString()} sq ft`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        container.appendChild(card);
    });
}

// Initial Card Render
createTempleCard(temples);

// Helper to extract numeric year from dedication string
function getYear(dedicatedStr) {
    return parseInt(dedicatedStr.split(",")[0].trim());
}

// Navigation Filter Listeners
document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "Home";
    createTempleCard(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "Old Temples";
    createTempleCard(temples.filter((t) => getYear(t.dedicated) < 1900));
});

document.querySelector("#new").addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "New Temples";
    createTempleCard(temples.filter((t) => getYear(t.dedicated) > 2000));
});

document.querySelector("#large").addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "Large Temples";
    createTempleCard(temples.filter((t) => t.area > 90000));
});

document.querySelector("#small").addEventListener("click", (e) => {
    e.preventDefault();
    heading.textContent = "Small Temples";
    createTempleCard(temples.filter((t) => t.area < 10000));
});

// Dynamic Footer Dates
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;