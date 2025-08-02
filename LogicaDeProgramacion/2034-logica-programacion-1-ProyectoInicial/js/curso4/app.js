/*
Visto en clase
Primeros pasos en Js
*/
/* let numeroMaximo = parseInt(prompt(`¿Cual es el número maximo del rango que quieres que sea?`)); */
numeroMaximo = 50;
let numeroSecreto = Math.floor(Math.random()*numeroMaximo +1);
console.log(numeroSecreto);
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximodeintentos = 10;

while(numeroUsuario != numeroSecreto){
    
    numeroUsuario = parseInt(prompt(`Me indicas un número del 1 al ${numeroMaximo} por favor:`));
    
    /* console.log(typeof numeroUsuario); */
    /*
    Esta parte del codigo verifica si el usuario acerto al numero
    */
    if (numeroUsuario === numeroSecreto) {
        //Acerto al numero
        alert(`¡Has acertado! el numero es ${numeroUsuario}`);
        alert(`Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces "}`)
    }else {
        if(numeroUsuario > numeroSecreto){
            alert(`El numero secreto es menor`);
        }
        else{
            alert(`El numero secreto es mayor `)
        }
        /* // No acerto el numero
        alert("Lo siento no acertaste el número"); */
        //Incrementamos el contador
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;
        //palabraVeces = "veces";
        if(intentos > maximodeintentos){
            alert(`Haz llegado al número maximo de ${maximodeintentos}  intentos`);
            break;
        }
    }
}
