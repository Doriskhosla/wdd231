
async function loadSpotlights() {
    const response = await fetch('data/members.json');
    const data = await response.json();

    // Filter gold and silver members
    const qualified = data.members.filter(member =>
        member.membership === "Gold" || member.membership === "Silver"
    );

    // Shuffle the array
    const shuffled = qualified.sort(() => 0.5 - Math.random());

    // Pick 2 or 3 members
    const spotlightCount = Math.floor(Math.random() * 2) + 2; // 2 or 3
    const selected = shuffled.slice(0, spotlightCount);

    const container = document.getElementById("spotlight-container");
    container.innerHTML = ""; // clear loading text

    selected.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("spotlight-card");

        card.innerHTML = `
            <img src="${member.image}" alt="${member.name} logo">
            <h3>${member.name}</h3>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Membership:</strong> ${member.membership}</p>
        `;

        container.appendChild(card);
    });
}

loadSpotlights();
