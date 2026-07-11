async function loadSpotlights() {
    const response = await fetch("data/members.json");
    const data = await response.json();

    // Filter only Gold (3) and Silver (2)
    const spotlightMembers = data.members.filter(member =>
        member.membershipLevel === 3 || member.membershipLevel === 2
    );

    // Pick 2 random spotlight members
    const selected = spotlightMembers.sort(() => 0.5 - Math.random()).slice(0, 2);

    const container = document.getElementById("spotlight-container");
    container.innerHTML = "";

    selected.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("spotlight-card");

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p><strong>Membership Level:</strong> ${member.membershipLevel === 3 ? "Gold" : "Silver"}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        `;

        container.appendChild(card);
    });
}

loadSpotlights();
