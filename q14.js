const altura = parseFloat(prompt('Informe sua altura: '))
const peso = parseFloat(prompt('Informe seu peso: '))


function calcular_imc(altura, peso) {
    const imc = peso / altura ** 2

    switch (true) {
        case imc < 18.5:
            console.log('Abaixo do peso')
            break;
        case 18.5 > imc < 24.9:
            console.log('Peso Normal')
            break;
        case 25 > imc < 29.9:
            console.log('Sobrepeso')
            break;
        case imc > 30:
            console.log('Obesidade')
            break;
        default:
            console.log('Opção inválida.')
            break;
    } return imc
}
const resultado = calcular_imc(peso, altura).toFixed(2)
console.log(resultado)