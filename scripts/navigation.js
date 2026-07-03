const menuButton = document.querySelector('#menu');
const nav = document.querySelector('#navMenu');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('show');

    const isExpanded = nav.classList.contains('show');
    menuButton.setAttribute('aria-expanded', isExpanded);
});

const form = document.querySelector('#contactForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Form submitted!');
    form.reset();
});