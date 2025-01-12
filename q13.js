function ler_valor() {
    const valor_Real = parseFloat(prompt('Informe o valor em Reais (R$): '))
    return valor_Real
}

function converter_Dolar(valor_Real, taxa_cambio){
    return valor_Real / taxa_cambio
}

function exibir_resultado(valor_Dolar){
    console.log(`O valor em Dólar é: $ ${valor_Dolar.toFixed(2)} dólares.` )
}

function conversor_Moedas(){
    let taxa_cambio = 6.20
    let valor_Real = ler_valor()
    let valor_Dolar = converter_Dolar(valor_Real, taxa_cambio)
    exibir_resultado(valor_Dolar)
}

conversor_Moedas()