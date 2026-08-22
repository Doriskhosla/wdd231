/************************************
 * 1. DOM ELEMENTS (SAFE SELECTORS)
 ************************************/
const input = document.querySelector('#favchap');
const addBtn = document.querySelector('#addBtn');
const message = document.querySelector('#message');
const list = document.querySelector('#chapList');
const fetchBtn = document.querySelector('#fetchBtn');
const article = document.querySelector('#article');

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navMenu');

const churchBtn = document.querySelector('#churchBtn');
const churchArticle = document.querySelector('#churchArticle');

const darkToggle = document.querySelector('#darkToggle');
const cardGrid = document.querySelector('#cardGrid');

const year = document.querySelector('#year');


/************************************
 * 2. FAVORITE CHAPTERS (SAFE)
 ************************************/
if (list && addBtn && input && message) {

    let chapters = JSON.parse(localStorage.getItem('chapters')) || [];

    function displayChapters() {
        list.innerHTML = "";

        chapters.forEach((chap, index) => {
            const li = document.createElement('li');
            li.textContent = chap;

            const delBtn = document.createElement('button');
            delBtn.textContent = "❌";
            delBtn.type = "button";
            delBtn.setAttribute('aria-label', `Delete ${chap}`);

            delBtn.addEventListener('click', () => {
                chapters.splice(index, 1);
                localStorage.setItem('chapters', JSON.stringify(chapters));
                displayChapters();
            });

            li.appendChild(delBtn);
            list.appendChild(li);
        });
    }

    displayChapters();

    addBtn.addEventListener('click', () => {
        const chapter = input.value.trim();

        if (chapter !== "") {
            chapters.push(chapter);
            localStorage.setItem('chapters', JSON.stringify(chapters));

            message.textContent = `Thank you. Your favorite chapter is ${chapter}.`;
            input.value = "";

            displayChapters();
        } else {
            message.textContent = "Please enter a chapter.";
        }
    });
}


/************************************
 * 3. FETCH SCRIPTURE ARTICLE (SAFE)
 ************************************/
if (fetchBtn && article) {

    fetchBtn.addEventListener('click', async () => {
        const url = "https://jsonplaceholder.typicode.com/posts/1";

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

            const data = await response.json();
            article.textContent = `Fetched Title: ${data.title}`;

        } catch (error) {
            article.textContent = "Error fetching article.";
            console.error(error);
        }
    });
}


/************************************
 * 4. HAMBURGER NAVIGATION (SAFE)
 ************************************/
if (hamburger && navMenu) {

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("open");

        const isOpen = navMenu.classList.contains("open");

        hamburger.setAttribute("aria-expanded", isOpen);
        hamburger.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });
}


/************************************
 * 5. CHURCH ARTICLE FETCH (SAFE)
 ************************************/
if (churchBtn && churchArticle) {

    churchBtn.addEventListener("click", async () => {
        const url = "https://content.churchofjesuschrist.org/api/v3/general-conference/2023/04/51oaks?lang=eng";

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

            const data = await response.json();
            churchArticle.textContent = `Article Title: ${data.title}`;

        } catch (error) {
            churchArticle.textContent = "Error fetching Church article.";
            console.error(error);
        }
    });
}


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
 * 7. CURRENT YEAR
 ************************************/
if (year) {
    year.textContent = new Date().getFullYear();
}


/************************************
 * 8. LOAD TOOLS FROM JSON (SAFE)
 ************************************/
async function loadTools() {

    if (!cardGrid) return; // Prevent errors on pages without cardGrid

    try {
        const response = await fetch("practice.json");
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

        const tools = await response.json();
        cardGrid.innerHTML = "";

        tools.forEach(tool => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <h3>${tool.name}</h3>
                <p>Category: ${tool.category}</p>
            `;

            cardGrid.appendChild(card);
        });

    } catch (error) {
        cardGrid.textContent = "Unable to load AI tools.";
        console.error(error);
    }
}

loadTools();
