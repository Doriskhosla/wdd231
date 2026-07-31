import { discover } from "../data/discover.mjs";

const container = document.getElementById("discoverCards");

discover.slice(0, 8).forEach(place => {
    const card = document.createElement("div");
    card.classList.add("place-card");

    card.innerHTML = `
    <h2 class="name">${place.name}</h2>

    <figure class="image">
        <img src="${place.image}" alt="${place.name}" width="300" height="200" loading="lazy">
    </figure>

    <p class="description">${place.description}</p>

    <address class="address">${place.address}</address>

    <button class="button learn-more">Learn More</button>
`;


    container.appendChild(card);
});
// Create a box container
const visitBox = document.createElement("div");
visitBox.classList.add("visit-box");

// Create the message paragraph
const visitMessage = document.createElement("p");
visitMessage.id = "visitMessage";

// Put the message inside the box
visitBox.appendChild(visitMessage);

const heading = document.querySelector("#discover-title");

if (heading) {
    heading.insertAdjacentElement("afterend", visitBox);
}
// LocalStorage logic stays the same
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    visitMessage.textContent = "Welcome! This is your first visit.";
} else {
    const days = Math.round((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
    visitMessage.textContent = `You last visited ${days} days ago.`;
}

localStorage.setItem("lastVisit", now);


