const jesus = {
    nombre: 'Jesus',
    apellido: 'Pacheco',
    edad: 27
}

const cumpleanosInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
})

//Se crea un nuevo objeto donde se guarrdara la nueva edad
//sin alterar el original
const jesus28 = cumpleanosInmutable(jesus)