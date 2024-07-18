// Abstracciones.
function repetirAccion(n, accion) {

    for (let i = 0; i < n; i++) {
        accion(i);
    }
}
repetirAccion(8, console.log);

// Repeticiones.
let etiquetas = [];
repetirAccion(6, i => {
    etiquetas.push(`Unidad ${i+1}`);
});
console.log(etiquetas);
