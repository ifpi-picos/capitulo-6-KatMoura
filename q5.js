const a = parseFloat(prompt("Informe o primeiro número: "))
const b = parseFloat(prompt("Informe o segundo número: "))
const c = parseFloat(prompt("Informe o terceiro número: "))

const calcular_media = (a, b, c) => {
    return (a + b + c) / 3
}

console.log(`A média dos números é: ${calcular_media(a, b, c).toFixed(2)}`)