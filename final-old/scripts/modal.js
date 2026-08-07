
import { saveLastTool } from "./storage.js";

const modal = document.querySelector("#toolModal");
const closeButton = document.querySelector("#closeModal");

document.addEventListener("click", (event) => {

    if (event.target.classList.contains("open-modal")) {

        const card = event.target.closest(".tool-card");
        saveLastTool(card.querySelector("h3").textContent);

        document.querySelector("#modalTitle").textContent =
            card.querySelector("h3").textContent;

        document.querySelector("#modalDescription").textContent =
            card.dataset.description;

        document.querySelector("#modalPricing").textContent =
            `Pricing: ${card.dataset.pricing}`;

        modal.showModal();
    }
});


closeButton.addEventListener("click", () => {
    modal.close();
});

