/*7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un numero aleatorio entre 1 y 10, si el resultado es par guarda su número en el array de pares y si el numero es impar en el array de impres. Muestra por consola: - la multiplicación que se produce junto con el resultado co el formato 2 x 3 = 6 - el array de pares e impares
*/

                /*mi solucion-5*/
              /* Antes de ver el vide*/

const numeros = [12,25,37,77,48]
let pares = []
let impares = []

for(const numero of numeros){
    let aleatorio = Math.round(Math.random() * 10 + 1)
    const resultado = numero * aleatorio

    console.log(`${numero} * ${aleatorio} * ${resultado}`)
    
    if(resultado % 2 == 0){
        pares.push(resultado)
    }else{
        impares.push(resultado)
    }
}

console.log(pares)
console.log(impares)