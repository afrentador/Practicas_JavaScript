/*2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solícita los datos que necesítes para calcularlos.
    triángulo = b*h/2
    rectángulo = b*h
    círculo = Π _ r2 (pi _ radio al cuadrado).
    */

     /*mi solucion-2*/
    /* Antes de ver el vide*/
    

let triángulo = '';

let b = prompt('Introduce la Base');
     
let h = prompt('Introduce el Altura');
     
console.log(`El área triángulo mide ${(b*h)/2}`);
     
let rectángulo = '';
     
console.log(`El área rectángulo mide ${(b*h)}`);
     
let círculo = '';
     
console.log(`El área círculo mide ${Math.PI * Math.pow(b,2)}`);

      /*solucion del profe*/
      /*explicacion con video*/

let figure = prompt('Introduce la figura geómerica de la que quieres calcular el área: triangle, rectangle or circle')

let base;
let height;
let radius;

switch(figure){
    case 'triangle':
        base=prompt('Introduce la base del triángulo')
        height=prompt('Introduce la altura del triángulo')
        console.log(`El área del triángulo es ${(base*height)/2}`);
        break;
    case 'rectangle':
        base=prompt('Introduce la base del rectángulo')
        height=prompt('Introduce la altura del rectángulo')
        console.log(`El área del rectángulo es ${(base*height)}`);
        break;
    case 'circle':
        radius=prompt('Introduce la radio del circulo')
        console.log(`El área del circulo es ${Math.PI * Math.pow(radius,2)}`);
        break;
}