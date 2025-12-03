$("#login").on("submit", function(e){
    e.preventDefault();

    var objLoginSenha = {
        email: $("#email").val(),
        senha: $("#senha").val()
    };

    var resultado = validarUsuario(objLoginSenha);

    if (resultado === true) {
        window.location.href = "mensagens.html";
    } else {
        alert("E-mail e senha inválidos!");
    }
});
