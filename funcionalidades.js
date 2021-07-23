/* Funciones adicionales y escritura en pantalla */
function borraDerAIzq( x, pantalla ) {
    let numero = x.split('') /* convierto el  num1 en un array */
    numero.pop() /* quita el ultimo valor */
    pantalla.innerHTML = numero.join('')
    return numero.join('') /* agrupa el arreglo a un string */
}
function escribirPantalla( caracter, x, pantalla ) {
    let numero = x.split('') /* convierto el num1 en un array */
    if( numero.length < 9 ){  /* si su tamaño es menor que las cifras maximas, agrego un nuevo caracter */
        numero.push(caracter)
    }
    pantalla.innerHTML = numero.join('')
    return numero.join('')
}
function escribirPunto( x, pantalla ) {
    if(x.split('.').length === 2){
        console.log('tiene punto')
        return x
    }
    else{
        console.log('no tiene punto')
        let numeroPantalla = x.split('')
        numeroPantalla.push('.')
        let mostrar = numeroPantalla.join('')
        pantalla.textContent = mostrar
        return mostrar
    }
}
export { borraDerAIzq, escribirPantalla, escribirPunto }