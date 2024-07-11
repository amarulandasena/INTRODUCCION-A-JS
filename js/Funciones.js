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
const potencia = (base, exponente = 3) => {

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

resultadoPotencia = potencia(8);
console.log("La potencia es: " + resultadoPotencia);


// Notaión de declaración.
console.log("El futuro dice: " + mensaje1());
function mensaje1(){
    return " vete a dormir, ya estás cansado.";
}

// Ejemplo de recursividad.
const encontrarSolucion = (objetivo) => {
    const encontrar = (actual, historia) => {
        if(actual == objetivo) {
            return historia;
        } else if(actual > objetivo) {
            return null;
        } else {
            return encontrar(actual + 5, `(${historia} + 5)`) || encontrar(actual * 3, `(${historia} * 3)`);
        }
    };
    return encontrar(1, "1");
};

console.log(encontrarSolucion(24));


// Función acolchar con ceros.
const acolcharConCeros = (numero, amplitud) => {
    let cantidadAnimales = String(numero);
    while (cantidadAnimales.length < 3){
        cantidadAnimales = "0" + cantidadAnimales;
    }
    return cantidadAnimales;
}

const imprimirInventario = (vacas, pollos, cerdos) => {
    console.log(`${acolcharConCeros(vacas, 3)} Vacas`);
    console.log(`${acolcharConCeros(pollos, 3)} Pollos`);
    console.log(`${acolcharConCeros(cerdos, 3)} Cerdos`)
}

imprimirInventario(10, 25, 6);

