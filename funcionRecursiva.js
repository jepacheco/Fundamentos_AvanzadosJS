function divisionEntera(dividendo, divisor) {
    if (dividendo < divisor) {
        return 0
    }

    return 1 + divisionEntera(dividendo - divisor, divisor)
}
//---------------------------------------------------------------

function factorial(n) {

    if (!this.cache) {
        //Se crea el objeto cache para guardar resultados
        this.cache = {}
    }

    if (this.cache[n]) {
        return this.cache[n]
    }

    if (n === 1) {
        return 1
    }

    //Se llena el objeto cache con el resultado obtenido
    this.cache[n] = n * factorial(n - 1)
    return this.cache[n]
}