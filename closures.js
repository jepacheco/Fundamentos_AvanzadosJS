function crearSaludo(finalDeFrase) {
    return function(nombre) {
        console.log(`Hola ${nombre} ${finalDeFrase}`)

    }
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('wey')
const saludoColombiano = crearSaludo('parse')
const saludoVenezolano = crearSaludo('pana')

saludoArgentino('Jesus')
saludoMexicano('Jesus')
saludoColombiano('Jesus')
saludoVenezolano('Jesus')