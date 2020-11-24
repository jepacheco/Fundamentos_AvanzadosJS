const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }
var characters = []

function fillAnShowArrayCharacters() {
    for (let i = 1; i <= 10; i++) {
        const id = i
        getCharacter(id)
    }
}

function getCharacter(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.get(url, opts, function(character) {
        console.log(`Hola, yo soy ${character.name}`);

        if (callback) {
            callback()
        }
    })
}

getCharacter(1, function() {
        getCharacter(2, function() {
            getCharacter(3, function() {
                getCharacter(4, function() {
                    getCharacter(5, function() {
                        getCharacter(6)
                    })
                })
            })
        })
    })
    // Al usar un metodo asincrono dependera de la respuesta del servidor
    // aunque se coloque un orden no sabremos cual respondera primero.
    //getCharacter(1)
    //getCharacter(2)
    //getCharacter(3)