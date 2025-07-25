/* Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador. */


//Ejercicio 1
/* let contador = 1;

while(contador <= 10){
    console.log(contador);
    contador = contador + 1;
}
     */

//Ejercicio2 

/* let contador = 10;

while(contador >= 0){
    console.log(contador);
    contador = contador - 1;
} */

//Ejercicio 3
let numeroPedido = Number(prompt("Ingresa el numero con el que quieres que inicie la cuenta regresiva"))
contador = 0;
while(contador <= numeroPedido){
    console.log(numeroPedido);
    numeroPedido = numeroPedido - 1;
}

//Ejercicio 4

/* let numeroPedido = Number(prompt("Ingresa hasta que numero quieres que cuente"))
contador = 0;
while(contador <= numeroPedido){
    console.log(contador);
    contador = contador + 1;
} */