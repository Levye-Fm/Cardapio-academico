document.addEventListener('DOMContentLoaded', function () {
    const fecharButton = document.querySelector('.fechar');
    if (fecharButton) {
        fecharButton.addEventListener('click', function () {
            window.location.href = '../página 4/index.html';
        });
    }
});