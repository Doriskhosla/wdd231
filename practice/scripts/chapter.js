
/************************************
 * 1. DOM ELEMENTS
 ************************************/
const bookList = document.querySelector("#bookList");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#closeModal");
const yearSpan = document.querySelector("#year");

/************************************
 * 2. BOOK OF MORMON DATA
 ************************************/
const books = [
    { name: "1 Nephi", chapters: 22 },
    { name: "2 Nephi", chapters: 33 },
    { name: "Jacob", chapters: 7 },
    { name: "Enos", chapters: 1 },
    { name: "Jarom", chapters: 1 },
    { name: "Omni", chapters: 1 },
    { name: "Words of Mormon", chapters: 1 },
    { name: "Mosiah", chapters: 29 },
    { name: "Alma", chapters: 63 },
    { name: "Helaman", chapters: 16 },
    { name: "3 Nephi", chapters: 30 },
    { name: "4 Nephi", chapters: 1 },
    { name: "Mormon", chapters: 9 },
    { name: "Ether", chapters: 15 },
    { name: "Moroni", chapters: 10 }
];

/************************************
 * 3. DISPLAY BOOK CARDS
 ************************************/
function displayBooks() {
    bookList.innerHTML = "";

    books.forEach(book => {
        const card = document.createElement("article");
        card.classList.add("book-card");

        card.innerHTML = `
            <h3>${book.name}</h3>
            <p>Number of chapters: ${book.chapters}</p>
            <button type="button" class="view-btn">View Chapters</button>
        `;

        // Open modal when clicking "View Chapters"
        card.querySelector(".view-btn").addEventListener("click", () => {
            openModal(book);
        });

        bookList.appendChild(card);
    });
}

displayBooks();
/************************************
 * 3.5. FILTER BOOKS BY CHAPTER COUNT
 ************************************/
function filterLargeBooks() {
    const largeBooks = books.filter(book => book.chapters > 20);
    bookList.innerHTML = "";

    largeBooks.forEach(book => {
        const card = document.createElement("article");
        card.classList.add("book-card");
        card.innerHTML = `
            <h3>${book.name}</h3>
            <p>Number of chapters: ${book.chapters}</p>
            <button type="button" class="view-btn">View Chapters</button>
        `;
        card.querySelector(".view-btn").addEventListener("click", () => {
            openModal(book);
        });
        bookList.appendChild(card);
    });
}


/************************************
 * 4. MODAL WINDOW
 ************************************/
function openModal(book) {
    modal.style.display = "flex";
    modal.querySelector("h3").textContent = book.name;
    modal.querySelector("p").textContent = `This book contains ${book.chapters} chapters.`;
}

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});
/************************************
 * 6. DARK MODE (SAFE)
 ************************************/
if (darkToggle) {

    darkToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const darkMode = document.body.classList.contains("dark-mode");

        darkToggle.textContent = darkMode ? "☀️" : "🌙";
        darkToggle.setAttribute(
            "aria-label",
            darkMode ? "Turn off dark mode" : "Turn on dark mode"
        );
    });
}

/************************************
 * 5. FOOTER YEAR
 ************************************/
yearSpan.textContent = new Date().getFullYear();

/************************************
 * 6. OPTIONAL: LOADING SPINNER TEMPLATE
 ************************************/
/*
const spinner = document.querySelector("#spinner");

async function fetchSomething(url) {
    spinner.style.display = "block";

    try {
        const response = await fetch(url);
        const data = await response.json();
        // update UI with data
    } finally {
        spinner.style.display = "none";
    }
}
*/
