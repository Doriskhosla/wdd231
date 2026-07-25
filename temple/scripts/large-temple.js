
import { temples } from "../data/temple.js";

const container = document.querySelector("#showHere");

temples.forEach(temple => {
    const card = document.createElement("section");

    card.innerHTML = `
        <h2>${temple.name}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <img src="${temple.path}" alt="${temple.name}">
    `;

    container.appendChild(card);
});
