/* Descarga otro proyecto haciendo clic en este enlace y ábrelo en Visual Studio Code.
Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
 */

let texto = document.querySelector("h1");
texto.innerHTML = "Hora del desafio";

function clicconsole(){
    console.log("El botón fue clicado");
}

function clicprompt(){
    let ciudad = prompt("Dame una ciudad de Brasil");
    alert(`Estuve en ${ciudad} y me acordé de ti".`)
}

function clicAlert(){
    alert("Yo amo JS");
}

function clicSuma(){
    let valor1 = parseInt(prompt("Dame un numero"))
    let valor2 = parseInt(prompt("Dame otro numero"))
    let suma = valor1 + valor2;
    alert(suma);
}
