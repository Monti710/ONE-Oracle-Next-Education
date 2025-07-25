/* Ejercicios de clase
1 - Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!".

2 - Declara una variable llamada nombre y asígnale el valor "Lua".

3 - Crea una variable llamada edady asígnale el valor 25.

4 - Establece una variable numeroDeVentas y asígnale el valor 50.

5 - Establece una variable saldoDisponible y asígnale el valor 1000.

6 - Muestra una alerta con el texto "¡Error! Completa todos los campos".

7 - Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .

8- Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre.

9 - Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.

10 - Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".

*/
alert("¡Bienvenida y bienvenido a nuestro sitio web!");
let nombres = "Lua"; //los use asi por que en los siguientes ejercicios se utilizan variables con ese mismo nombnre
let edady = 25; // los use asi por que en los siguientes ejercicios se utilizan variables con ese mismo nombnre
let numeroDeVentas = 50;
let saldoDisponible = 1000;
let mensajeDeError = "¡Error!"
alert(mensajeDeError);
alert("¡Error! Completa todos los campos");
let nombre = prompt("Escribe tu nombre");
let edad = prompt("Ingresa tu edad");

if(edad >= 18){
    alert("¡Puedes obtener tu licencia de conducir!");
}