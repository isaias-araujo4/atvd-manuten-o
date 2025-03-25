//doom
let n1 = document.querySelector('#n1')
let operador = document.querySelector('#operador')
let n2 = document.querySelector('#n2')
const botao = document.querySelector('#btn-calcular')

//evento
botao.addEventListener('click', function () {
    // Captura os valores dos campos e remove espaços extras
    let valor1 = n1.value.trim();
    let valor2 = n2.value.trim();

    // Validação para verificar se os campos estão vazios
    if (valor1 === "" || valor2 === "") {
        alert("Por favor, preencha ambos os campos antes de calcular.");
        return; // Para a execução da função
    }

    let num1 = parseFloat(valor1);
    let num2 = parseFloat(valor2);
    let op = operador.value;
    let res = 0;

    // Verifica o operador e realiza a operação
    switch (op) {
        case '+':
            res = num1 + num2;
            break;
        case '-':
            res = num1 - num2;
            break;
        case '*':
            res = num1 * num2;
            break;
        case '/':
            res = num2 !== 0 ? num1 / num2 : 'Erro (divisão por zero)';
            break;
        default:
            res = 'Operação inválida';
    }

    // Exibe o resultado em um alert
    alert("O resultado é: " + res);
});