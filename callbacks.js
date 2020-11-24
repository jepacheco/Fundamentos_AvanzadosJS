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

getCharacter(1)
    .then(function(character) {
        console.log(`El personaje es ${character.name}`)
    })
    .catch(onError)

// Al usar un metodo asincrono dependera de la respuesta del servidor
// aunque se coloque un orden no sabremos cual respondera primero.
//getCharacter(1)
//getCharacter(2)
//getCharacter(3)