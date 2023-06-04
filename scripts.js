        /*Ejercicios*/

/*1 - Solicita un nombre, la edad y muestra por consola el mensaje "hola ___ tienes ___ años y el año que viene tendrás ___ años".
    Reliza el ejercicio con prompt(mensaje) y has uso de los template strings.*/

let nombre = '';

let eda = 39;

let años = 1;

while(nombre != 'victor'){
    nombre = prompt('Intoduce tu nombre');
}
do{
    edad = prompt('Introduce tu edad')
}while(edad != '39');

console.log(`Hola ${nombre}, tienes ${edad} años y el año que viene tendrás
${eda+años} años.`);