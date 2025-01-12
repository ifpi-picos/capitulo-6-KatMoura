function jogo_adivinhacao() {
    const numero_aleatorio = Math.floor(Math.random() * 101)
    let tentativas = 10
    let acertou = false

    console.log(`Seja bem-vindo! Adivinhe o número de 1 à 100, você tem ${tentativas} tentativas. Boa sorte!`)

    while (tentativas > 0 && !acertou) {
        const palpite = parseInt(prompt("Informe o seu palpite: "))

        if (palpite === numero_aleatorio) {
            acertou = true
            console.log('Parabéns, você acertou o número aleatório!')
        } else if (palpite < numero_aleatorio) {
            console.log(`O número secreto é maior. Tente novamente, você tem ${tentativas} tentativas restantes.`)
        } else {
            console.log(`O número secreto é menor. Tente novamente, você tem ${tentativas} tentativas restantes.`)
        }
        tentativas--
    }

    if (!acertou) {
        console.log(`Que pena, você não conseguiu acertar o número secreto! O número era ${numero_aleatorio}`)
    }
}

jogo_adivinhacao()