let resultado = ''
/* Operaciones matemáticas */
const suma = ( x, y, nodo, pantalla ) => {
    if( x != '-' && y != '-'){
        resultado = parseFloat(x) + parseFloat(y)
        if(resultado > 999999999){
            pantalla.innerHTML = 'muy grande'
            return ''
        }
        else{
            pantalla.innerHTML = String(resultado)
            nodo.style.color = 'white'
            return String(resultado)
        }
    }
    else{
        console.log("no es una operacion")
        pantalla.textContent = 'lol'
        return ''
    }
}
const resta = ( x, y, nodo, pantalla ) => {
    if( x != '-' && y != '-'){
        resultado = parseFloat(y) - parseFloat(x)
        const analisis = String(resultado).split('.')
        const cantCifras = String( analisis[1] ).length
        if( cantCifras > 5 )
        {
            if( resultado < -999999999 ){
                pantalla.innerHTML = 'muy chico'
                return ''
            }
            else{
                pantalla.innerHTML = String( Math.round( resultado ) )
                nodo.style.color = 'rgb(233, 231, 231)'
                return String( Math.round( resultado ) )
            }
        }
        else{
            pantalla.innerHTML = String(resultado)
            nodo.style.color = 'rgb(233, 231, 231)'
            return String(resultado)
        }
    }
    else{
        console.log("no es una operacion")
        pantalla.textContent = 'lol'
        return ''
    }
}
const multiplicacion = ( x, y, nodo, pantalla ) => {
    if( x != '-' && y != '-'){
        resultado = parseFloat(x) * parseFloat(y)
        if( resultado > 999999999 ) {
            pantalla.innerHTML = 'muy grande'
            return ''
        }
        else{
            pantalla.innerHTML = String(resultado)
            nodo.style.color = 'rgb(233, 231, 231)'
            return String(resultado)
        }
    }
    else{
        console.log("no es una operacion")
        pantalla.textContent = 'lol'
        return ''
    }
}
const division = ( x, y, nodo, pantalla ) => {
    if( x != '-' && y != '-'){
        resultado = parseFloat(y) / parseFloat(x)
        let regresar = ''
        if( resultado === parseInt(resultado) ){
            console.log('es entero')
            pantalla.innerHTML = String(resultado)
            nodo.style.color = 'rgb(233, 231, 231)'
            return String(resultado)
        }
        else{
            console.log("no es entero")
            resultado = resultado.toFixed(1)
            let arrayNum = String(resultado).split('.')
            arrayNum[0].split('').length <= 8
                ? ( pantalla.innerHTML = String(resultado), regresar = String(resultado) )
                : pantalla.innerHTML = 'muy grande'
            nodo.style.color = 'rgb(233, 231, 231)'
            return regresar
        }
    }
    else{
        console.log("no es una operacion")
        pantalla.textContent = 'lol'
        nodo.style.color = 'rgb(233, 231, 231)'
        return ''
    }
}
const resto = ( x, y, nodo, pantalla ) => {
    if( x != '-' && y != '-' ){
        resultado = parseFloat(y) % parseFloat(x)
        pantalla.innerHTML = String(resultado)
        nodo.style.color = 'rgb(233, 231, 231)'
        return String(resultado)
    }
    else{
        console.log("no es una operacion")
        pantalla.textContent = 'lol'
        nodo.style.color = 'rgb(233, 231, 231)'
        return ''
    }
}
const cambiarSigno = ( pantalla ) => {
    if( pantalla.textContent === '' ){
        pantalla.textContent = '-'
        return '-'
    }
    else if(pantalla.textContent === '-'){
        pantalla.textContent = ''
        return ''
    }
    else{
        let result = parseFloat(pantalla.innerHTML) * (-1)
        pantalla.textContent = String(result)
        return String(result)
    }
}
const potencia = ( x, y, nodo, pantalla ) => {
    if( x != '-' && y != '-'){
        resultado = parseFloat(y) ** parseFloat(x)
        if( resultado > 999999999 ){
            pantalla.textContent = 'muy grande'
            return ''
        }
        else if( resultado < -999999999 ){
            pantalla.textContent = 'muy chico'
            return ''
        }
        else{
            pantalla.innerHTML = String(resultado)
            nodo.style.color = 'rgb(233, 231, 231)'
            return String(resultado)
        }
    }
    else{
        console.log("no es una operacion")
        pantalla.textContent = 'lol'
        return ''
    }
}
export { suma, resta, multiplicacion, division, resto, cambiarSigno, potencia }