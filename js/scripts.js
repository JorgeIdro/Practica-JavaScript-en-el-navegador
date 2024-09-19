// querySelector
const heading = document.querySelector('#heading'); // Retorna 0 o 1 elemento
// Guardamos la etiqueta que contenga el id 'heading' en una variable
console.log(heading);
heading.classList.add('nueva_clase'); // Agrega solo una clase nueva a la etiqueta
heading.textContent = 'Nuevo heading'; // Cambiamos el texto de la etiqueta
console.log();

// querySelectorAll
document.querySelectorAll('.navegacion a');
const enlaces = document.querySelectorAll('.navegacion a'); // Retorna 0 o todos los elementos que contengan la misma clase o etiqueta
console.log(enlaces);
console.log(enlaces[0]); // Para elegir un elemento según su posición
enlaces[0].textContent = 'Google'; // Cambiamos el texto del primer enlace
enlaces[0].href = 'https://www.google.com'; // cambiamos la url del primer enlace
enlaces[0].classList.add('otra_clase'); // Agregamos una nueva clase
//enlaces[0].classList.remove('navegacion__enlace'); // Eliminamos una clase
console.log();

// getElementById
// Es la forma antigua se seleccionar selectores del HTML, parecido a los anteriores

const heading2 = document.getElementById('heading')
console.log(heading2);

// Generar un nuevo enlace
// Cuando creamos una nueva etiqueta con createElement() debemos poner todo en mayúscula "DIV"
const nuevoEnlace = document.createElement('A');

// Agregar HREF
nuevoEnlace.href = 'https://www.google.com'

// Agregar texto
nuevoEnlace.textContent = 'Google 2';

// Agregar clases
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al HTML
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace); // Agrega como hijo y los muestra en el HTML

console.log(nuevoEnlace);
console.log();


// Eventos //

console.log(1); // se imprime primero
window.addEventListener('load', function() { // Espera a que todos los documentos se carguen por completo y luego lo imprime
    console.log(2); // se imprime cuarto
});
window.onload = function() { // mas corto que el de arriba
    console.log(3); // se imprime quinto
}
document.addEventListener('DOMContentLoaded', function() { // Solo espera a que se imprima el HTML
    console.log(4); // se imprime tercero
})
console.log(5); // se imprime segundo

window.addEventListener('load', imprimir); // Otra forma del segundo
function imprimir() { // posiblemente esta forma sirva si el código es extenso
    console.log(6); // se imprime sexto
}

// Usualmente mas se usa el cuarto "DOM", debido a que la mayoría de las veces solo requerimos que solo se cargue el HTML, solo a menos que necesitemos que se cargue mas elementos que solo el HTML debemos usar "onload" o "load"

window.onscroll = function() { // cada vez que hacemos scroll se activa la función
    console.log('scrolling...');
}