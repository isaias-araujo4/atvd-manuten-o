

//evento
document.addEventListener("DOMContentLoaded", function () {
    const botao = document.querySelector("#btn-gerar");

    botao.addEventListener("click", function () {
        // Captura os valores dos campos e remove espaços extras
        let data = document.getElementById("data").value.trim();
        let tipoErro = document.getElementById("tipo-erro").value.trim();
        let descricao = document.getElementById("descricao").value.trim();
        let responsavel = document.getElementById("responsavel").value.trim();

        // Validação para verificar se os campos estão vazios
        if (data === "" || tipoErro === "" || descricao === "" || responsavel === "") {
            alert("⚠️ Por favor, preencha todos os campos antes de gerar o relatório.");
            return;
        }

        // Criação do relatório formatado
        let relatorio = `📋 **Relatório de Manutenção**\n\n` +
            `🗓️ Data: ${data}\n` +
            `🔧 Tipo: ${tipoErro}\n` +
            `📝 Descrição: ${descricao}\n` +
            `👤 Responsável: ${responsavel}`;

        // Exibe o relatório no alerta
        alert(relatorio);
    });
});