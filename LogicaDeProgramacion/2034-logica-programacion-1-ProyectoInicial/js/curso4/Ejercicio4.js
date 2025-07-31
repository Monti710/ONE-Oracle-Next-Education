/* Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola. */

// Ejercicio 1: Mostrar mensaje de bienvenida en consola
console.log("Bienvenido");

// Ejercicio 2: Mostrar nombre en consola y con alert
let nombre = "Ismael";
console.log(`Hola ${nombre}`);
alert(`¡Hola, ${nombre}`);

// Ejercicio 3: Preguntar lenguaje favorito y mostrar en consola
let lenguajeprogramacion = prompt("¿Cual es tu lenguaje de programacion favorito?");
console.log(`Tu lenguaje de programación favorito es ${lenguajeprogramacion}`);

// Ejercicio 4: Suma de dos valores
let valor1 = 10;
let valor2 = 5;
let resultado = valor1 + valor2;
alert(`La suma de valor 1: ${valor1} y valor2: ${valor2} es igual a ${resultado}`);

// Ejercicio 5: Resta de dos valores
let resultado2 = valor1 - valor2;
alert(`La diferencia entre el valor 1 : ${valor1} y  el valor 2 : ${valor2} es de : ${resultado2}`);

// Ejercicio 6: Verificar mayoría de edad
let edad = prompt("Ingresa tu edad");
if (edad > 18) {
    alert("Eres mayor de edad");
} else {
    alert("Eres menor de edad");
}

// Ejercicio 7: Verificar si un número es positivo, negativo o cero
let numero = prompt("Ingresa un numero");
if (numero > 0) {
    alert("Tu numero es positivo");
} else {
    alert(`Tu numero es ${numero == 0 ? "cero" : "negativo"}`);
}

// Ejercicio 8: Bucle while del 1 al 10
let inicio = 1;
while (inicio <= 10) {
    console.log(inicio);
    inicio++;
}

// Ejercicio 9: Evaluar nota
let nota = prompt("¿Cual es tu nota");
if (nota >= 7) {
    alert("Aprobaste");
} else {
    alert("Reprobaste");
}

// Ejercicio 10: Número aleatorio decimal entre 0 y 1
console.log(Math.random());

// Ejercicio 11: Número aleatorio entero entre 1 y 10
console.log(Math.floor(Math.random() * 10) + 1);

// Ejercicio 12: Número aleatorio entero entre 1 y 1000
console.log(Math.floor(Math.random() * 1000) + 1);
