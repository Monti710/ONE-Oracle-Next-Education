/*
Visto en clase
Primeros pasos en Js
*/
let numeroSecreto = 8;
let numeroUsuario =  prompt('Me indicas un número del 1 al 10 por favor:');
 
console.log(numeroUsuario);
/*
 Esta parte del codigo verifica si el usuario acerto al numero
*/
if (numeroUsuario == numeroSecreto) {
    //Acerto al numero
    alert(`¡Has acertado! el numero es ${numeroUsuario}`);
}else {
    // No acerto el numero
    alert("Lo siento no acertaste el número");
}
