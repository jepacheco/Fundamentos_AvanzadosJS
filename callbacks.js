const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function getCharacter(id) {

    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opts, function(data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`);
}

//para poder utilizar el "await" la funcion debe ser async
async function getCharacters() {
    var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var promesas = ids.map(id => getCharacter(id))
    try {
        var characters = await Promise.all(promesas)
        console.log(characters);
    } catch (id) {
        onError(id)
    }
}

getCharacters()


//Forma de encadenar promesas
// getCharacter(1)
//     .then(function(character1) {
//         console.log(`El personaje 1 es ${character1.name}`)
//         return getCharacter(2)
//     })
//     .then(character2 => {
//         console.log(`El personaje 2 es ${character2.name}`)
//         return getCharacter(3)
//     })
//     .then(character3 => {
//         console.log(`El personaje 3 es ${character3.name}`)
//         return getCharacter(4)
//     })
//     .then(character4 => {
//         console.log(`El personaje 4 es ${character4.name}`)
//         return getCharacter(5)
//     })
//     .then(character5 => {
//         console.log(`El personaje 5 es ${character5.name}`)
//         return getCharacter(6)
//     })
//     .then(character6 => {
//         console.log(`El personaje 6 es ${character6.name}`)
//         return getCharacter(7)
//     })
//     .then(character7 => {
//         console.log(`El personaje 7 es ${character7.name}`)
//     })
//     .catch(onError)

// Al usar un metodo asincrono dependera de la respuesta del servidor
// aunque se coloque un orden no sabremos cual respondera primero.
//getCharacter(1)
//getCharacter(2)
//getCharacter(3)