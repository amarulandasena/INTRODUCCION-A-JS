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

