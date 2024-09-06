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

// Manejo de excepciones
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
    if (pedirDireccion("Hacia qué diracción quieres ir?") == "I") {
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

