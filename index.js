import { suma, resta, multiplicacion, division, resto, cambiarSigno, potencia } from './operaciones.js'
import { borraDerAIzq, escribirPantalla, escribirPunto } from './funcionalidades.js'

/* ***Variables*** */
/* Traigo el boton para agregar nuevos modulo y el contenedor de los espacios */
const agregar = document.querySelector('.agregar__espacios')
const espaciosPadre = document.querySelector('.keyboard')
/* Traigo mi <p> de información para verificar el evento mouseover */
const info = document.querySelector('.informacion')
/* Traigo mi <p> que va a ser mi pantalla principal */
let pantalla = document.querySelector('.pantalla__text')
/* Traigo mi <p> de la subpantalla */
let subpantalla = document.querySelector('#subpantalla')
/* Traigo mi contenedor de los botones en el cuerpo de la carculadora
para escuchar los eventos click solo de estos botones */
const teclado = document.querySelector('.keyboard')
/* Traigo todos los botones que estan dentro del contenedor anterior */
const botonesNodeList = teclado.querySelectorAll('button')
const arrayBotones = [...botonesNodeList]
/* Traigo todos mis elementos arrastrables, tienen la clase '.botones' */
const NodeListDragBotons = document.querySelectorAll('.botones')
const arrayDragBotons = [...NodeListDragBotons]
/* Traigo todos mis contenedores donde voy a soltar los elementos arrastrables */
const NodeListDropTargets = document.querySelectorAll('.boton__container')
const arrayDropTargets = [...NodeListDropTargets]
/* Traigo el contenedor inferior de los modulos que no quiero que esten en la calculadora
y que también es un elemento más en el cual debo poder soltar mis botones */
const contenedorModulos = document.querySelector('.module__container')
arrayDropTargets.push(contenedorModulos)
/* Variables Principales para las operaciones */
let num1 = ''
let num2 = ''
let operador = ''
let nodo_operador = null


/* ***Calculadora*** */
/* Esta es la funcion que se ejecutara cuando un boton sea presionado */
/* Segun el boton que sea presionado va a llmar a una funcion especifica */
function botonPresionado(event) {
    /* console.log(event.target) */
    switch( event.target.id ){
        case 'uno': num1 = escribirPantalla( '1', num1, pantalla )
        break
        case 'dos': num1 = escribirPantalla( '2', num1, pantalla )
        break
        case 'tres': num1 = escribirPantalla( '3', num1, pantalla )
        break
        case 'cuatro': num1 = escribirPantalla( '4', num1, pantalla )
        break
        case 'cinco': num1 = escribirPantalla( '5', num1, pantalla )
        break
        case 'seis': num1 = escribirPantalla( '6', num1, pantalla )
        break
        case 'siete': num1 = escribirPantalla( '7', num1, pantalla )
        break
        case 'ocho': num1 = escribirPantalla( '8', num1, pantalla )
        break
        case 'nueve': num1 = escribirPantalla( '9', num1, pantalla )
        break
        case 'cero': num1 = escribirPantalla( '0', num1, pantalla )
        break
        case 'punto': num1 = escribirPunto( num1, pantalla )
        break
        case 'suma': operacion('+', event.target)
        break
        case 'resta': operacion('-', event.target)
        break
        case 'mult': operacion('*', event.target)
        break
        case 'divis': operacion('/', event.target)
        break
        case 'resto': operacion('%', event.target)
        break
        case 'potencia': operacion('^', event.target)
        break
        case 'igual': igualA()
        break
        case 'borrar': num1 = borraDerAIzq( num1, pantalla )
        break
        case 'clear': limpiarTodo()
        break
        case 'signo': num1 = cambiarSigno( pantalla )
        break
        default: console.log('no he programado este botones todabia')
        break
    }
}
/* Funciones que manejan la lógica del funcionamiento de la calcladora */
function operacion( ope, nodo ) {
    if( num1 != '' && operador === ''){
        operador = ope
        num2 = num1
        pantalla.textContent = ''
        subpantalla.textContent = num2 + operador
        num1 = ''
        nodo.style.color = 'black'
        nodo_operador = nodo
    }
}
/* Cuando se presiona el igual es que se llama a la función cuyo operador sea el que
el usuario seleccionó anteriormente  */
function igualA() {
    if( num1 != '' ){
        switch( operador ){
            case '+': num1 = suma( num1, num2, nodo_operador, pantalla )
            break
            case '-': num1 = resta( num1, num2, nodo_operador, pantalla )
            break
            case '*': num1 = multiplicacion( num1, num2, nodo_operador, pantalla )
            break
            case '/': num1 = division( num1, num2, nodo_operador, pantalla )
            break
            case '%': num1 = resto( num1, num2, nodo_operador, pantalla )
            break
            case '^': num1 = potencia( num1, num2, nodo_operador, pantalla )
            break
            default: console.log(':(')
            break
        }
        console.log(`el valor de operador era: ${operador}`)
        operador = ''
    }
}
/* Esta función inicializa las variables globales y borra la pantalla */
function limpiarTodo() {
    if( num1 === '' && num2 === '' && operador === '' && pantalla.textContent === ''
        && subpantalla.textContent === '' && nodo_operador === null )
    {
        console.log('todo está limpio')
    }
    if( nodo_operador != null )
    {
        nodo_operador.style.color = 'rgb(233, 231, 231)'
        nodo_operador = null
        num1 = ''
        num2 = ''
        operador = ''
        pantalla.textContent = ''
        subpantalla.textContent = ''
    }
    else{
        num1 = ''
        num2 = ''
        operador = ''
        pantalla.textContent = ''
        subpantalla.textContent = ''
    }
}


/* ***Drag and Drop*** */
/* Coge el id del elemento que comienzo a arrastrar con setData
y se lo paso con dataTransfer al siguiente evento (dragover) */
function dragstart_handler(event) {
    event.dataTransfer.setData( 'text/plain', event.target.id )
    event.dataTransfer.effectAllowed = 'move'
    /* event.currentTarget.style.backgroundColor = 'yellow' */
}
/* Permite arrastrar correctamente el elemento e identifica(visualmente) si el contenedor
donde posiblemente valla a soltar el elemento que estoy arrastrando es el adecuado */
function dragover_handler(event) {
    event.preventDefault()
    /* event.currentTarget.style.backgroundColor = 'red' */
    event.dataTransfer.dropEffect = 'move'
}
/* Esta es la función que permite que pueda soltarle a ese contenedor, el elemento que vengo
arrastrando. Recibe el id del elemento arrastrado a traves de getData() del dataTransfer y
agrega el elemento al contenedor con append() */
function drop_handler(event){
    event.preventDefault()
    const id_botonArrastrado = event.dataTransfer.getData('text')
    if(event.target.id === 'modules'){
        event.target.appendChild( document.getElementById( id_botonArrastrado ) )
        let indice_elementoA_eliminar
        for( let pos in arrayBotones ){
            if( arrayBotones[pos].id === id_botonArrastrado ){
                indice_elementoA_eliminar = pos
            }
        }
        let eliminado = arrayBotones.splice( indice_elementoA_eliminar, 1 )
        eliminado[0].removeEventListener( 'click', botonPresionado )
        eventoClick()
    }
    else if( event.target.querySelector('.botones') == null && event.target.nodeName != 'BUTTON')
    {
        event.target.appendChild( document.getElementById( id_botonArrastrado ) )
        event.dataTransfer.clearData()
        arrayBotones.push( document.getElementById( id_botonArrastrado ) )
        eventoClick()
    }
    else{
        event.dataTransfer.clearData()
    }
}
/* Función de mostrar ayuda */
function mostrarAyuda() {
    const body = document.querySelector('body')
    const ayuda = document.createElement('p')
    const text = document.createTextNode('Los botones que están en la calculadora, son los que están activos. Si desea puede reorganizar los botones de la calculadora a su gusto o intercambiar las funciones con las que están en el contenedor (Botones Intercambiables)')
    ayuda.style.position = 'absolute'
    ayuda.style.width = '250px'
    ayuda.style.height = '150px'
    ayuda.style.left = '45px'
    ayuda.style.top = '45px'
    ayuda.style.zIndex = '2'
    ayuda.style.padding = '5px'
    ayuda.style.color = 'black'
    ayuda.style.textAlign = 'justify'
    ayuda.style.fontFamily = 'Arial'
    ayuda.style.fontSize = '1.5rem'
    ayuda.style.border = '1px solid rgba(255, 255, 255, 0.5)'
    ayuda.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
    ayuda.id = 'ayuda'
    ayuda.className = 'blur'
    ayuda.appendChild( text )
    body.insertBefore( ayuda, info )
    console.log('poner la ayuda')
}
/* Función para quitar la ayuda */
function quitarAyuda() {
    const eliminarNodo = document.querySelector('#ayuda')
    eliminarNodo.remove()
    console.log('quitar la ayuda')
}
/* Función para agregar un nuevo espacio */
/* <div class="boton__container"></div> */
function agregarEspacio() {
    const contenedor = document.createElement('div')
    contenedor.className = 'boton__container'
    espaciosPadre.appendChild(contenedor)
    arrayDropTargets.push(contenedor)
    eventosDrop()
}



/* ***Eventos*** */
/* Recorriendo todos los nodos tipo boton para asignarles un evento "click" a cada uno */
function eventoClick() {
    arrayBotones.forEach( element => {
        element.addEventListener( 'click', botonPresionado )
    })
}
/* Evento para agregar nuevos espacios a la calculadora */
agregar.addEventListener('click', agregarEspacio)
/* Evento para mostrar información de ayuda  */
info.addEventListener( 'mouseover', mostrarAyuda )
/* Evento para quitar la información de la ayuda */
info.addEventListener( 'mouseout', quitarAyuda )
/* Evento inicio del arrastre(ocurre en el elemento arrastrable) */
arrayDragBotons.forEach( element => {
    element.addEventListener( 'dragstart', dragstart_handler )
})
/* Evento de seguimiento del arrastre y evento de soltar elemento(ocurre en el target) */
function eventosDrop() {
    arrayDropTargets.forEach( element => {
        element.addEventListener( 'dragover', dragover_handler )
        element.addEventListener( 'drop', drop_handler )
    })
}
/* Evento de carga inicial de window */
window.addEventListener('load', () => {
    console.log('terminó de cargar la calculadora')
    eventoClick()
    eventosDrop()
})


