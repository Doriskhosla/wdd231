
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('#navMenu');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');

    const isOpen = navigation.classList.contains('open');
    hamButton.setAttribute('aria-expanded', isOpen);
});
