const jesus = {
    nombre: 'Jesus',
    apellido: 'Apellido'
}

function saludar(saludo = 'Hola') {
    console.log(`${saludo}, mi nombre es ${this.nombre}`);
}

//con el bind creamos una nueva funcion donde especificamos el contexto
// de referencia para el "this" de no hacerlo su referencia sera windows
const saludarAJesus = saludar.bind(jesus)

// el call hace que se ejecute de inmediato con el contexto insertado
saludar.call(jesus, 'Hola pana este es el call')

//apply hace lo mismo que call pero los parametros adicionales se pasan en array
saludar.apply(jesus, ['Hola pana este es apply'])