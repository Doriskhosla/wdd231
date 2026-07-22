
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#navMenu');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamButton.classList.toggle('show');

    const isOpen = navigation.classList.contains('show');
    hamButton.setAttribute('aria-expanded', isOpen);
});
