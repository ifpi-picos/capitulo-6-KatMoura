function calculadora() {
    const a = parseFloat(prompt('Digite o primeiro número: '));
    const operacao = prompt('Informe a operação (+; -; * ou /): ');
    const b = parseFloat(prompt('Digite o segundo número: '));
    const resultado = calcular_numeros(operacao, a, b);
    exibir_resultado(resultado);
}

function calcular_numeros(operacao, a, b) {
    switch (operacao) {
        case '+':
            return adicao(a, b);
        case '-':
            return subtracao(a, b);
        case '*':
            return multiplicar(a, b);
        case '/':
            return dividir(a, b);
        default:
            return 'Operação inválida';
    }
}

function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function exibir_resultado(resultado) {
    console.log(`O resultado é: ${resultado}`);
}

calculadora();