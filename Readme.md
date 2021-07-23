# Modular Calculator :computer:
Esta sencilla calculadora modular está construida con las tecnologías básicas de la web( HTML, CSS y JavaScript ). Tiene como objetivo que se le puedan agregar nuevas funciones u operaciones en forma de módulos intercambiable( botones ).

## Técnicas de Diseño :black_nib:
La página está diseñada Mobile-First para que se adapte correctamente a la mayoría de dispositivos móviles. Luego es responsive cuando se trata de pantallas de mayor tamaño, reacomodando el diseño de una manera más adecuada.
El cuerpo de la calculadora en esencia combina difuminados y transparencias que hacen parecer que es de cristal. Esto se logra con: `backdrop-filter: blur(10px);` y con transparencia en el background-color del contenedor.

## ¿Cómo se cambian los botones? :information_source:
Todos hemos alguna vez arrastrado y soltado una carpeta en Windows para moverla o copiarla de un lado al otro. Similar a como ocurre en otros sistemas, también sucede en el DOM. Existe la API de HTML llamada: **Drang and Drop**.
Con esta API podemos a través de tres eventos principales (dragstart, dragover y drop) manejar que elemento se arrastra y donde se suelta.
Entonces arrastra los botones para agregarle nuevas funciones a la calculadora o reorganiza el teclado.

## Agregar nuevas funciones :bulb:
Me he propuesto aumentarle la cantidad de funciones u operaciones a la calculadora para que sea capaz de hacer más cosas. También tengo pensado ir mejorándole algunos detalles de funcionamiento para hacerla lo más permisiva posible a equivocaciones del usuario al intentar hacer cosas con ella.

## Contribuyendo :raising_hand:
El código está disponible para el que desee lo modifique y lo use a su conveniencia. Espero que les sirva para aprender algo más de HTML, CSS3 y JavaScript.
Atenderé las solicitudes de modificaciones para mejorarla siempre y cuando usemos estén bajo la premisa de agregar nuevas funcionalidades a la calculadora.

## Licencia :unlock:

[MIT](https://choosealicense.com/licenses/mit/)
