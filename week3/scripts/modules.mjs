import byuiCourse from "./course.mjs";
import { setTitle, renderSections } from "./output.mjs";

// Set the title
setTitle(byuiCourse.title);

// Fill the dropdown
const sectionSelect = document.querySelector("#sectionNumber");
byuiCourse.sections.forEach(section => {
    const option = document.createElement("option");
    option.value = section.sectionNumber;
    option.textContent = `Section ${section.sectionNumber}`;
    sectionSelect.appendChild(option);
});

// Show the sections on the page
renderSections(byuiCourse.sections);

// Button listeners
document.querySelector("#enrollStudent").addEventListener("click", () => {
    const selected = parseInt(sectionSelect.value);
    byuiCourse.changeEnrollment(selected, true);
    renderSections(byuiCourse.sections);
});

document.querySelector("#dropStudent").addEventListener("click", () => {
    const selected = parseInt(sectionSelect.value);
    byuiCourse.changeEnrollment(selected, false);
    renderSections(byuiCourse.sections);
});
