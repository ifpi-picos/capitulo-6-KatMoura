const exibir_variavel = () => {
    const var_local = parseInt(prompt('Entendendo o escopo local. Digite o  número 1: '))

    switch (var_local) {
        case 1:
            console.log('Tudo certo!')
            break
        default:
            console.log('Resposta errada')
    }
}

exibir_variavel(var_local)