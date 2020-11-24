class Persona {
    constructor(nombre, apellido, edad, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura
    }

    saludar(fn) {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
        if (fn) {
            fn(this.nombre, this.apellido, null)
        }
    }


    esAlta() {
        if (this.altura > 1.8) {
            console.log('Es una persona alta')
        } else {
            console.log('No es una persona alta')
        }
    }
}
//HErencia de personas con la palabra extends, y el super llama al constructor del padre
class Desarrollador extends Persona {
    constructor(nombre, apellido, edad, altura) {
            super(nombre, apellido, edad, altura)
        }
        //Le podemos pasar una funcion como parametro a otra funcion
    saludar(fn) {
        //se puede colocar para no tener que usar el previo 'this' dentro de la funcion
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`);
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`);
    if (esDev) {
        console.log(`oh! no sabia que eras desarrollador`);
    }
}



var jesus = new Desarrollador('Jesus', 'Pacheco', 26, 1.66)
var camila = new Persona('Camila', 'Pacheco', 2, 0.98)