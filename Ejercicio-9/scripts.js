/*9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.*/


             /*mi solucion-9*/
            /* Antes de ver el vide*/
      
const palabra = prompt('Introduce una palabra');

let vocales = 0;
let consonantes = 0;

for(const letra of palabra){
    if(letra == 'a' || letra == 'e' ||letra == 'i' ||letra == 'o' ||letra == 'u')vocales++
    else consonantes++ 
}

console.log(`La palabra Tine ${vocales} vocales, ${consonantes} consonantes, y un total de ${palabra.length} letras`);

             /*solucion del profe*/
          /*explicacion con video*/