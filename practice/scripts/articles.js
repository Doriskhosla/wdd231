/************************************
 * 1. DOM ELEMENTS
 ************************************/
const container = document.querySelector(".articles");
const darkToggle = document.querySelector("#darkToggle");

/************************************
 * 2. ARTICLES OF FAITH DATA
 ************************************/
const articles = [
    { number: 1, text: "We believe in God the Eternal Father, His Son Jesus Christ, and the Holy Ghost." },
    { number: 2, text: "We are responsible for our own actions, not for Adam’s transgression." },
    { number: 3, text: "Through Christ’s Atonement, all mankind may be saved by obedience to the gospel." },
    // ...continue up to 13
];

/************************************
 * 3. DISPLAY ARTICLE CARDS
 ************************************/
function displayArticles() {
    container.innerHTML = "";

    articles.forEach(a => {
        const card = document.createElement("div");
        card.classList.add("article-card");

        card.innerHTML = `
            <h2>Article of Faith ${a.number}</h2>
            <p>${a.text}</p>
        `;

        container.appendChild(card);
    });
}

displayArticles();

/************************************
 * 4. DARK MODE
 ************************************/
if (darkToggle) {
    darkToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const darkMode = document.body.classList.contains("dark-mode");

        // Change icon + accessibility label
        darkToggle.textContent = darkMode ? "☀️" : "🌙";
        darkToggle.setAttribute(
            "aria-label",
            darkMode ? "Turn off dark mode" : "Turn on dark mode"
        );
    });
}


