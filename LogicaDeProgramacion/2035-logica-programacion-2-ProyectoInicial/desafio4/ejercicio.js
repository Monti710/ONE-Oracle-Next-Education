/* Crea una lista vacía llamada "listaGenerica".
Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
Crea una función que calcule el promedio de los elementos en una lista de números.
Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
Crea una función que devuelva la suma de todos los elementos en una lista.
Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número. */
let listaGenerica = [];
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

function mostrarLenguages(){
   for(let i = 0 ; i < lenguagesDeProgramacion.length ; i ++){
        console.log(lenguagesDeProgramacion[i]);
   }
   return lenguagesDeProgramacion;
}

function mostrarLenguagesInverso(){
    for(let i = lenguagesDeProgramacion.length-1; i > 0; i--){
        console.log(lenguagesDeProgramacion[i]);
    }
    return lenguagesDeProgramacion;
}

let numeros = [1, 2, 3, 4, 5];

function promedio(){
    let suma = 0;
    for(let i = 0; i < numeros.length; i++){
        suma += numeros[i];
    }
    promedio = suma/numeros.length;
    console.log(promedio)
}

function numeroMasGrandeYPequeño(listaNumeros){
    numeroMayor = listaNumeros[0];
    numeroMenor = listaNumeros[0];
    for(let i = 0; i < listaNumeros.length; i++){
        if(listaNumeros[i] > numeroMayor ){
            numeroMayor = listaNumeros[i];
            
        }else{ 
            if(numeroMenor < listaNumeros[i]){
                numeroMenor = listaNumeros[i];
            }
        }
        
    }
    console.log(numeroMenor)
    console.log(numeroMayor)
    
}

/* mostrarLenguages(); */
//mostrarLenguagesInverso();
//console.log("Hola mundo")
//promedio()
numeroMasGrandeYPequeño(numeros);