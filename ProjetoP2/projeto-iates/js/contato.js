$("#form-contato").on("submit", function(e){
    e.preventDefault();
    var mensagem = {
        nome: $("#nome").val(),
        email: $("#email").val(),
        mensagem: $("#msg").val()
    };
    inserirMensagem(mensagem);
    alert("Mensagem enviada com sucesso!");
    $(this)[0].reset();
});