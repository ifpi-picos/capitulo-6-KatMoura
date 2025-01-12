const variavel_global = 'Eu sou uma váriavel global.'

const exemplo_escopo = () => {
    const var_local = 'Eu sou uma váriavel local.'

    console.log(variavel_global)
    console.log(var_local)
}

exemplo_escopo()

console.log(variavel_global)
console.log(var_local)