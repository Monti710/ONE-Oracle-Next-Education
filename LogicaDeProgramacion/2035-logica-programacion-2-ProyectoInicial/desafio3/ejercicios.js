/* Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
Crea una función que calcule el valor del factorial de un número pasado como parámetro.
Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro. */



function calcularImc(peso, altura){
    let numberSquare = Math.pow(altura , 2);
    let imc = peso / numberSquare ;
    console.log(imc);
}

function factorial(numero){
    let resultado = 1;
    let i = 1;
    while(i <= numero){
        resultado *= i;
        //resultado = resultado * i; //Otra forma de hacerlo
        i++;
    }
    console.log(resultado)
    return resultado;
}

function convertirDolares(dolares, valorMxn)
{
    pesoMexicano = dolares * valorMxn;
    console.log(pesoMexicano);
}

function areaPerimetroRectangulo(altura, ancho){
    let area = altura * ancho;
    let perimetro = 2 * (altura + ancho);
    console.log(`El área del rectángulo es: ${area} y el perímetro es: ${perimetro}`);
}

function areaPerimetroCirculo(radio){
    let area = Math.PI * Math.pow(radio, 2);
    let perimetro = 2 * Math.PI * radio;
    console.log(`El área del círculo es: ${area} y el perímetro es: ${perimetro}`);
}

//ultimo ejercicio
function tablaMultiplicar(numero){
    let i = 1;
    while(i <= 10){
        let tabla = i * numero;
        console.log(tabla);
        i++;
    }
}

calcularImc(120, 1.72);

factorial(5);

convertirDolares (5, 20);

areaPerimetroRectangulo(5, 10);

areaPerimetroCirculo(5);

tablaMultiplicar(7);

