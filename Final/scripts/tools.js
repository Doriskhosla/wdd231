
export async function loadTools() {
    try {
        const response = await fetch("data/tools.json");
        const tools = await response.json();
        return tools;
    } catch (error) {
        console.error("Error loading tools:", error);
    }
}

export function displayTools(tools) {
    const container = document.querySelector("#tools-container");

    tools.forEach(tool => {
        const card = document.createElement("div");
        card.classList.add("tool-card");
        card.dataset.description = tool.description;
        card.dataset.pricing = tool.pricing;

        card.innerHTML = `
            <div class="inner">
                <img src="${tool.image}" 
                     alt="${tool.name}" 
                     loading="lazy" 
                     width="300" 
                     height="200">

                <h3>${tool.name}</h3>

                <p><strong>Category:</strong> ${tool.category}</p>
                <p><strong>Pricing:</strong> ${tool.pricing}</p>
                <p>${tool.description}</p>

                <a href="${tool.website}" target="_blank" rel="noopener">
                    Visit ${tool.name} Website
                </a>

                <button class="open-modal" data-id="${tool.id}">
                    More Info
                </button>
            </div>
        `;

        container.appendChild(card);
    });
}

/* ⭐ THIS MUST BE OUTSIDE THE LOOP ⭐ */
loadTools().then(tools => {
    displayTools(tools);
});
