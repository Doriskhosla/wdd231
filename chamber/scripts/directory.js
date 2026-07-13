const container = document.querySelector("#directory-container");
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");

async function getMembers() {
    try {
        const response = await fetch("data/members.json");
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error("Error loading members:", error);
        container.innerHTML = "<p>Unable to load directory.</p>";
    }
}

function displayMembers(members) {
    container.innerHTML = "";

    members.forEach((member, index) => {
        const card = document.createElement("section");
        card.classList.add("member-card");

        const isFirst = index === 0; // first card gets fetchpriority

        card.innerHTML = `
            <img src="images/${member.image}" 
                 alt="${member.name}" 
                 width="120" 
                 height="120"
                 ${isFirst ? 'fetchpriority="high"' : 'loading="lazy"'}>

            <div class="member-info">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p class="level">Membership Level: ${member.membershipLevel}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

// GRID / LIST BUTTONS
gridBtn.addEventListener("click", () => {
    container.classList.add("grid");
    container.classList.remove("list");
});

listBtn.addEventListener("click", () => {
    container.classList.add("list");
    container.classList.remove("grid");
});

// START
getMembers();
