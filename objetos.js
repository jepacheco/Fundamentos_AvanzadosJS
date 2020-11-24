var Jesus = {
    nombre: 'Jesus',
    apellido: 'Pacheco',
    edad: 26,
    altura: 1.66
}

var Camila = {
    nombre: 'Camila',
    apellido: 'Pacheco',
    edad: 2,
    altura: 1.81
}

function imprimirNombreYEdad(persona) {
    console.log(`Hola, me llamo ${persona.nombre} y tengo ${persona.edad}`);
}
//Arrow Function
const esMayorDeEdad = ({ edad }) => edad >= 18

const Acceso = persona => {
    console.log(!esMayorDeEdad(persona) ? 'Acceso Denegado' : 'Acceso consedido');
}

//Filter
var personas = [Camila, Jesus]

var personaBajas = ({ altura }) => altura < 1.8

var personasBajas = personas.filter(personaBajas)

//Map
const pasarAlturaACms = persona => ({
    //Aca creamos un nuevo array con la configuracion deseada
    ...persona,
    altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms);