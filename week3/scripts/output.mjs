export function setTitle(title) {
    document.querySelector("h1").innerHTML = title;
}

export function renderSections(sections) {
    const output = document.querySelector("#sectionsOutput");
    output.innerHTML = "";

    // Header row
    const header = document.createElement("div");
    header.classList.add("section-row", "header-row");
    header.innerHTML = `
        <span>Section</span>
        <span>Enrolled</span>
        <span>Instructor</span>
    `;
    output.appendChild(header);

    // Data rows
    sections.forEach(section => {
        const row = document.createElement("div");
        row.classList.add("section-row");
        row.innerHTML = `
            <span>${section.sectionNumber}</span>
            <span>${section.enrolled}</span>
            <span>${section.instructor}</span>
        `;
        output.appendChild(row);
    });
}
