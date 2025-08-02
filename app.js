let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function VerificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById(`numeroUsuario`).value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemnto("p", `¡Felicidades! Has acertado el número secreto en ${intentos} ${intentos === 1 ? "intento" : "intentos"}.`);
        document.getElementById("reiniciar").removeAttribute(`disabled`);
    } else {
        //El usuario no ha acertado el número secreto
        if(numeroDeUsuario < numeroSecreto){
        asignarTextoElemnto("p", "El número secreto es mayor, intenta nuevamente");
    } else {
        asignarTextoElemnto("p", "El número secreto es menor, intenta nuevamente");
    }
        intentos++;
        limpiarInput();
    }
}

function limpiarInput(){
    document.querySelector("#numeroUsuario").value = "";
}

function asignarTextoElemnto(elemento, texto){
    let title = document.querySelector(elemento);
    title.innerHTML = texto;
    return;
}

function GenerarNumeroSecreto(){
    let numeroSecretoGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sortteamos todos los números posibles
    if(listaNumerosSorteados.length === numeroMaximo){
        listaNumerosSorteados.length = 0; //Limpiamos la lista de números sorteados
        return GenerarNumeroSecreto(); //Volvemos a generar un nuevo número
    }else{
        //Si el numero genereado esta en la lista
        if(listaNumerosSorteados.includes(numeroSecretoGenerado)){
            //Volvemos a generar un nuevo número
            return GenerarNumeroSecreto();
        } else {
            //Si no está en la lista, lo agregamos
            listaNumerosSorteados.push(numeroSecretoGenerado);
            return numeroSecretoGenerado;
        }
    }
}

function condicionesIniciales(){
    //Asignamos el texto del título y del párrafo
    asignarTextoElemnto("h1", "Es hora de iniciar el juego");
    asignarTextoElemnto("p", `Indica un número del 1 al ${numeroMaximo}!`);
    numeroSecreto = GenerarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Reseteamos el número secreto
    //Llamamos a la función que genera la pagina con las condiciones iniciales
    condicionesIniciales();
    
    document.getElementById("reiniciar").setAttribute(`disabled`, `true`);
    //Limpiamos el input
    limpiarInput();
}   

condicionesIniciales();

