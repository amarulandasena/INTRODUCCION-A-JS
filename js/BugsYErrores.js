// Clase Date.
console.log(new Date());

// Probar una función.
function Probar (etiqueta, cuerpo) {
    if (!cuerpo()) console.log (`Fallo: ${etiqueta}`);
}

Probar("convertir texto latino a mayúscula", () => {
    return "hola".toUpperCase == "HOLA";
});

Probar("convertir texto griego a mayúsculas", () => {
    return "Χαίρετε".toUpperCase == "XAIPETE";
});

/* Manejo de excepciones
class ErrorDeEntrada extends Error {

} */

const pedirDireccion = (pregunta) => {
    let resultado = prompt(pregunta);

    if (resultado.toLowerCase == "derecha") {
        return "D";
    }

    if (resultado.toLowerCase == "izquierda") {
        return "I";
    }

    throw new Error("Dirección invalida: " + resultado);
}

const mirar = () => {
    if (pedirDireccion("Hacia qué dirección quieres ir?") == "I") {
        return "una casa";
    } else {
        return "dos osos furiosos";
    }
}

try {
    console.log("Tú ves " + mirar());
} catch (error) {
    console.log ("Algo incorrecto sucedió: " + error);
}

// Sistma bancario
const cuentas = {
    a : 100,
    b : 20,
    c : 0
}

let obtenerCuenta = () => {
    let nombreCuenta = prompt("Ingrese el nombre de la cuenta: ");
    
    if (!cuentas.hasOwnProperty(nombreCuenta)) {
        throw new Error (`La cuenta "${nombreCuenta}" no existe`);
    }

    return nombreCuenta;
}

let transferencia = (desde, cantidad) => {
    if (cuentas[desde] < cantidad) {
        return ;
    }

    let progreso = 0;
    try {
        cuentas[desde] -= cantidad;
        progreso = 1;
        cuentas[obtenerCuenta()] += cantidad;
        progreso = 2;
    } finally {
        if (progreso == 1) {
            cuentas[desde] += cantidad;
        }
    }
}