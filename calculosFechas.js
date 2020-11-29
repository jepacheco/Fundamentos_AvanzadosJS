let hoy = new Date()
let nacimiento = new Date(1993, 10, 23)

function diferenciaDeDias(fecha1, fecha2) {
    // un dia equivale a 1000ms * 60sg * 60 min * 24h
    const unDia = 1000 * 60 * 60 * 24
    const diferencia = Math.abs(fecha1 - fecha2)

    return Math.floor(diferencia / unDia)
}

console.log(`han pasado ${diferenciaDeDias(hoy,nacimiento)} dias desde mi nacimiento`)