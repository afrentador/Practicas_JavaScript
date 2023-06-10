/* 4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número es primo o no.
Un numero primo es aquel que solo es divisible por si mismo y la unidad.
*/

          /*mi solucion-4*/
    /* Antes de ver el vide*/

    /*irresoluto*/


     /*solucion del profe*/
      /*explicacion con video*/

let numero = prompt('Introduce un Numero Enteros');
let divisores = 0;

if(numero === 1) console.log(`El numero no es valido`);
else{
    for(let i=2; i<numero; i++){
         if(numero % i == 0){
            console.log(`${numero} / ${i} = ${numero/i} - no es primo`);
            break;
        }
    }
}
if(divisores = 0) console.log(`${numero} - es primo`);