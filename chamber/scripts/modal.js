const buttons = document.querySelectorAll(".open-modal");
const closes = document.querySelectorAll(".close");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const modalId = btn.dataset.modal;
        const modal = document.getElementById(modalId);
        modal.showModal();
    });
});

closes.forEach(close => {
    close.addEventListener("click", () => {
        close.parentElement.close();
    });
});
