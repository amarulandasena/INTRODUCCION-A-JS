// Script de introducción al trabajo con funciones.

// Función sin parametros.
const mensaje = () => {
    console.log("Bienvenidos al mundo de las funciones en Javascript.");
}

// Calcular el cuadrado de un número, pero que no retorne ningún valor.
const cuadrado = (numero) => {

    let cuadradoNumero = numero * numero;
    console.log("El cuadrado del número " + numero + " es: " + cuadradoNumero);
}

// Calcule una potencia, pero retorne el valor calculado.
const potencia = (base, exponente) => {

    let resultadoPotencia = 1;
    for(i = 1; i <= exponente; i++){
        resultadoPotencia *= base;
    }

    return resultadoPotencia;
}

mensaje();
cuadrado(12);

let resultadoPotencia = potencia(3,5);
console.log("La potencia es: " + resultadoPotencia);


// Notaión de declaración.
console.log("El futuro dice: " + mensaje1());
function mensaje1(){
    return " vete a dormir, ya estás cansado.";
}


