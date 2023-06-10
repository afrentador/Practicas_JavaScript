/* 5 - Escriba un programa que pida un Númeo entero mayor que cero y culcule su factoríal.
El factorial es el resultado de múltiplicar ese número por sus anteriores hasta la unidad.

    !5 = 5*4*3*2*1 = 120
    */


               /*mi solucion-5*/
            /* Antes de ver el vide*/


/*inconcluso*/

             /*solucion del profe*/
          /*explicacion con video*/

let resultado = 1
let numero = prompt('Introduce un Numero')

for(let i=numero; i>0; i--){
    resultado *= i
}
console.log(`El factorial de ${numero} es ${resultado}`)