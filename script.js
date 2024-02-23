function gerarSenha(tamanho) {
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var senha = '';
    for (var i = 0; i < tamanho; i++) {
        var indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(indice);
    }
    return senha;
}

function mostrarSenha() {
    var tamanho = document.getElementById('tamanho').value;
    var senhaGerada = gerarSenha(tamanho);
    document.getElementById('senha').value = senhaGerada;
}