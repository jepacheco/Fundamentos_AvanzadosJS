const jesus = {
    nombre: 'Jesus',
    apellido: 'Pacheco',
    edad: 28
}

const cumpleanosInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
})