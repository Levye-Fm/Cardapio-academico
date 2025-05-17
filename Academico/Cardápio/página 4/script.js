document.addEventListener('DOMContentLoaded', function () {
    const continuarButton = document.querySelector('.btn');
    if (continuarButton) {
        continuarButton.addEventListener('click', function () {
            window.location.href = '../página 5/index.html';
        });
    }
});