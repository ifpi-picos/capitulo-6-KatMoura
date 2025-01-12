function jogo_adivinhacao() {
    const numero_aleatorio = Math.floor(Math.random() * 101)
    let pontuacao = 100
    let acertou = false

    console.log(`Seja bem-vindo! Adivinhe o número de 1 à 100, você tem ${pontuacao} pontos. Boa sorte!`)

    while (pontuacao > 0 && !acertou) {
        const palpite = parseInt(prompt("Informe o seu palpite: "))

        if (palpite === numero_aleatorio) {
            acertou = true
            console.log(`Parabéns, você acertou o número secreto! A sua pontuação foi de ${pontuacao} pontos.`)
        } else if (palpite < numero_aleatorio) {
            console.log('O número secreto é maior. Tente novamente')
        } else {
            console.log('O número secreto é menor. Tente novamente')
        }
        pontuacao--
    }

    if (!acertou) {
        console.log(`Que pena, você não acertou o número secreto! O número era ${numero_aleatorio}`)
    }
}

jogo_adivinhacao()