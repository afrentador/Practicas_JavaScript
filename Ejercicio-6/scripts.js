/* 6 - Escribe un programa que permita ir introduciendo una serie indeterminada de números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido.
*/

            /*mi solucion-6*/
            /* Antes de ver el vide*/

// let numero = parseInt(prompt('Introduce un Numero'))

// while(numero != '50'){
//     for(let i=numero; i<=50; i++){
//         console.log(Math.round(Math.random()*numero))
//     }
//     break
// } "me falta de verddad implementar logica, ejercicio no resuelto"

             /*solucion del profe*/
          /*explicacion con video*/

let suma = 0
let conteo = 0

while(suma < 50){
    suma += parseInt(prompt('Introduce un numero'))
    conteo++
}

console.log(`La suma total es: ${suma}`)
console.log(`El total de numeros son: ${conteo}`)