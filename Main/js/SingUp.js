const form = document.getElementById('form')
const UserNome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const senha2 = document.getElementById('confirmarSenha');


form.addEventListener('submit', function(e) {
     if (senha.value !== senha2.value) {
        alert("As senhas não coincidem. Por favor, verifique.");
        e.preventDefault();
    }
    const dados = {
        nome : UserNome.value,
        email: email.value,
        senha: senha.value
    }
    fetch('/api/registrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => {
        // Tratar a resposta do servidor
    })
    .catch(error => {
        // Tratar erros
    });
})