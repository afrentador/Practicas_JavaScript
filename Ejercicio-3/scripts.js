/*3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar".
si el número es el 5 el resultado será:
1 - es impar
2 - es par
3 - es impar
4 - es par
5 - es impar
*/

             /*mi solucion-3*/
             /* Antes de ver el vide*/

let numero = prompt('Introduce el numero que quieres verificar');

if(numero == 1){
    console.log(`El número ${numero} es Impar`);
}else{
    console.log(`Número 1`);
}
if(numero == 2){
    console.log(`El número ${numero} es Par`);
}else{
    console.log(`Número 2`);
}
if(numero == 3){
    console.log(`El número ${numero} es Impar`);
}else{
    console.log(`Número 3`);
}
if(numero == 4){
    console.log(`El número ${numero} es Par`);
}else{
    console.log(`Número 4`);
}
if(numero == 5){
    console.log(`El número ${numero} es Impar`);
}else{
    console.log(`Número 5`);
}

        /*solucion del profe*/
      /*explicacion con video*/

let num = parseInt(prompt('Introduce un numero'));

for(let i=1; i<=num; i++){
    if(i%2==0){
        console.log(`${i} - es par`);
    }else{
        console.log(`${i} - es impar`);
    }
}