/*10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determina si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
*/

               /*mi solucion-10*/
            /* Antes de ver el vide*/
const colores = ["azul", "amarillo", "rojo", "verde", "rosa"];

const color = prompt('Introduce una color').toLowerCase(); 

if(colores.indexOf(color) !== -1){
    console.log('Tu color esta en el Array');
}else{
    console.log('Tu color no est definido');
}
    
            
                         /*solucion del profe*/
                      /*explicacion con video*/