// Array of Temple Objects (9 original + 3 additional)
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/temples/issue-1/aba-nigeria-temple/aba-nigeria-temple-lds-273999-square.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/temples/issue-1/manti-utah-temple/manti-utah-temple-768117-square.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/temples/issue-1/payson-utah-temple/payson-utah-temple-lds-384741-square.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/temples/issue-1/yigo-guam-temple/yigo-guam-temple-lds-2200234-square.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/temples/issue-1/washington-dc-temple/washington-dc-temple-lds-2200234-square.jpg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/temples/issue-1/lima-peru-temple/lima-peru-temple-lds-1122822-square.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/temples/issue-1/mexico-city-mexico-temple/mexico-city-mexico-temple-lds-2200234-square.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl:
            "https://content.churchofjesuschrist.org/temples/issue-1/salt-lake-temple/salt-lake-temple-lds-156558-square.jpg"
    },
    {
        templeName: "Logan Utah",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 17",
        area: 119619,
        imageUrl:
            "https://content.churchofjesuschrist.org/temples/issue-1/logan-utah-temple/logan-utah-temple-lds-2200234-square.jpg"
    },
    // 3 Additional Temple Objects
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
            "https://content.churchofjesuschrist.org/temples/issue-1/accra-ghana-temple/accra-ghana-temple-lds-2200234-square.jpg"
    },
    {
        templeName: "Bern Switzerland",
        location: "Münchenbuchsee, Switzerland",
        dedicated: "1955, September, 11",
        area: 35500,
        imageUrl:
            "https://content.churchofjesuschrist.org/temples/issue-1/bern-switzerland-temple/bern-switzerland-temple-lds-2200234-square.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 53997,
        imageUrl:
            "https://content.churchofjesuschrist.org/temples/issue-1/tokyo-japan-temple/tokyo-japan-temple-lds-2200234-square.jpg"
    }
];

// Select DOM elements
const templeContainer = document.querySelector("#temple-container");
const headingTitle = document.querySelector("main h2");
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

// Display Temples Function
function displayTemples(filteredTemples) {
    templeContainer.innerHTML = "";

    filteredTemples.forEach((temple) => {
        const card = document.createElement("figure");
        card.classList.add("temple-card");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = "lazy"; // Native lazy loading requirement
        img.width = 400;
        img.height = 250;

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        templeContainer.appendChild(card);
    });
}

// Navigation Filter Event Listeners
document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    headingTitle.textContent = "Home - All Temples";
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
    e.preventDefault();
    headingTitle.textContent = "Old Temples (Built before 1900)";
    const oldTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    });
    displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", (e) => {
    e.preventDefault();
    headingTitle.textContent = "New Temples (Built after 2000)";
    const newTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });
    displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", (e) => {
    e.preventDefault();
    headingTitle.textContent = "Large Temples (Over 90,000 sq ft)";
    const largeTemples = temples.filter((temple) => temple.area > 90000);
    displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", (e) => {
    e.preventDefault();
    headingTitle.textContent = "Small Temples (Under 10,000 sq ft)";
    const smallTemples = temples.filter((temple) => temple.area < 10000);
    displayTemples(smallTemples);
});

// Hamburger Navigation Toggle
menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");

    if (menuButton.classList.contains("open")) {
        menuButton.textContent = "❌";
        menuButton.setAttribute("aria-label", "Close navigation menu");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
    }
});

// Footer Dates
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Initial Render
displayTemples(temples);