/*8 - Dado un arry de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 digitos. la posición de la letra es el resultado del módulo del número introducido entre 23.

   const letrs = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
*/

          /*mi solucion-8*/
            /* Antes de ver el vide*/
            //sin resolver


             /*solucion del profe*/
          /*explicacion con video*/

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

const dni = prompt('Introduce tu DNI')

if(dni.length==8 && parseInt(dni)>0){
    console.log(`Tu DNI completo es ${dni}${letras[dni%23]}`)
}