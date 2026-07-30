import { discover } from "../data/discover.mjs";

const container = document.getElementById("discoverCards");

discover.slice(0, 8).forEach(place => {
    const card = document.createElement("div");
    card.classList.add("place-card");

    card.innerHTML = `
        <h2>${place.name}</h2>

        <figure>
            <img src="${place.image}" alt="${place.name}" width="300" height="200">
        </figure>

        <address>${place.address}</address>

        <p>${place.description}</p>

        
    `;

    container.appendChild(card);
});
