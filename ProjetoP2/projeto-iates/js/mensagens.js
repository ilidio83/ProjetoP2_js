$(document).ready(function(){

    function carregarMensagens(){
        var lista = obterMensagens();
        localStorage.setItem("mensagensRecebidas", JSON.stringify(lista));
        atualizarTabela(lista);
    }

    function atualizarTabela(lista){
        var tbody = $("#tabelaMensagens tbody");
        tbody.empty();

        lista.forEach(function(msg, index){

            var estilo = msg.visualizada ? "font-weight: normal;"
                                         : "font-weight: bold;";

            var linha = `
                <tr style="${estilo}">
                    <td>${msg.nome}</td>
                    <td>${msg.email}</td>
                    <td>${msg.mensagem}</td>
                    <td>
                        <button class="btnVisualizar" data-id="${index}">Visualizada</button>
                        <button class="btnExcluir" data-id="${index}">Excluir</button>
                    </td>
                </tr>
            `;

            tbody.append(linha);
        });
    }

    carregarMensagens();

    function carregarLocal(){
        return JSON.parse(localStorage.getItem("mensagensRecebidas")) || [];
    }

    function salvarLocal(lista){
        localStorage.setItem("mensagensRecebidas", JSON.stringify(lista));
    }

    $(document).on("click", ".btnVisualizar", function(){
        if(!confirm("Marcar mensagem como visualizada?")) return;

        var id = $(this).data("id");
        var lista = carregarLocal();
        lista[id].visualizada = true;

        salvarLocal(lista);
        location.reload();
    });

    $(document).on("click", ".btnExcluir", function(){
        if(!confirm("Deseja realmente excluir esta mensagem?")) return;

        var id = $(this).data("id");
        var lista = carregarLocal();
        lista.splice(id, 1);

        salvarLocal(lista);
        location.reload();
    });

    $("#logout").on("click", function(){
        localStorage.removeItem("logado");
        window.location.href = "admin.html";
    });
    });