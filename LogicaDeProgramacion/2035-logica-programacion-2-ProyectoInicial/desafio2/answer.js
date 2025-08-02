/* Crear una función que muestre "¡Hola, mundo!" en la consola.
Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
Crear una función que reciba tres números como parámetros y devuelva su promedio.
Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo. */

function hola(){
    console.log("¡Hola mundoo!");
}
hola();
function saludo (nombre){
    console.log(`¡Hola, ${nombre}!`);
}
saludo("Ismael");

function Hacerdoble(numero){
    let doble = numero * 2;
}
Hacerdoble(4);

function HacerPromedio(n1, n2, n3){
    let promedio = (n1 + n2 + n3)/3;
    console.log(promedio) 
}

HacerPromedio(10,8,1);

function Mayor(n1, n2){
    if(n1 > n2){
        console.log(n1);
    } else {
        console.log(n2);
    }
}
Mayor(10, 20);

function Cuadrado(numero){
    let resultado = numero * numero;
    console.log(resultado);
}
Cuadrado(5);