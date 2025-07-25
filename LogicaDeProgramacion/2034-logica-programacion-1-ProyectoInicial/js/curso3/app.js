/*
Visto en clase
Primeros pasos en Js
*/
let numeroSecreto = 8;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = "vez";
while(numeroUsuario != numeroSecreto){
    
    numeroUsuario = Number (prompt('Me indicas un número del 1 al 10 por favor:'));
    
    console.log("Hola mundo+")
    console.log(typeof numeroUsuario);
    /*
    Esta parte del codigo verifica si el usuario acerto al numero
    */
    if (numeroUsuario == numeroSecreto) {
        //Acerto al numero
        alert(`¡Has acertado! el numero es ${numeroUsuario}`);
        alert(`Lo hiciste en ${intentos} ${palabraVeces}`)
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
        intentos = intentos + 1;
        palabraVeces = "veces";
    }
}
