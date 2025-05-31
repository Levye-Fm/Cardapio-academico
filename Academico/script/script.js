const form = document.getElementById('form')
const UserNome = document.getElementById('nome');
const senha = document.getElementById('Senha1');
const senha2 = document.getElementById('Senha2');


form.addEventListener('submit', function(e) {
     if (senha.value !== senha2.value) {
        alert("As senhas não coincidem. Por favor, verifique.");
        e.preventDefault();
    }
})