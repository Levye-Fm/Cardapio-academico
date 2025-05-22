document.addEventListener('DOMContentLoaded', function () {
    const fecharButton = document.querySelector('.fechar');
    if (fecharButton) {
        fecharButton.addEventListener('click', function () {
            const caminho = window.location.pathname;
            const nomeArquivo = caminho.substring(caminho.lastIndexOf("/") + 1);
            const match = nomeArquivo.match(/\d+/);
            var numero = parseInt(match[0], 10);
            numero--;
            console.log(numero);
            if (numero <4) {
                return;
            }
            window.location.href = '../página '+numero+'/pagina'+numero+'.html';
        });
    }

    const continuarButton = document.querySelector('.continuar');
    if (continuarButton) {
        continuarButton.addEventListener('click', function () {
            const caminho = window.location.pathname;
            const nomeArquivo = caminho.substring(caminho.lastIndexOf("/") + 1);
            const match = nomeArquivo.match(/\d+/);
            var numero = parseInt(match[0], 10);
            numero++;
            if (numero > 6) {
                window.location.href = '../página 4/pagina4.html';
                return;
            }
            window.location.href = '../página '+numero+'/pagina'+numero+'.html';
        });
    }
});