const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }
var characters = []
const onPeopleResponse = function(character) {
    characters.push(character.name)
    console.log(`Hola, yo soy ${character.name}`);
}

function getCharacter(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse)
}

// Al usar un metodo asincrono dependera de la respuesta del servidor
// aunque se coloque un orden no sabremos cual respondera primero.
//getCharacter(1)
//getCharacter(2)
//getCharacter(3)

function fillAnShowArrayCharacters() {
    for (let i = 1; i <= 10; i++) {
        const id = i
        getCharacter(id)
    }
}

fillAnShowArrayCharacters()