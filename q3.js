const num_1 = parseFloat(prompt("Informe o primeiro número: "))
const num_2 = parseFloat(prompt("Informe o segundo número: "))
const num_3 = parseFloat(prompt("Informe o terceiro número: "))

const media = (num_1 + num_2 + num_3) / 3

console.log(`A média dos números é: ${media.toFixed(2)}`)