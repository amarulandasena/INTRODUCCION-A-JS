// Busqueda del alimeto oculto.
import {granRoble} from "./tecnologia-cuervo";

granRoble.leerAlmacenamiento ("caches de alimentos", caches => {
    let primerCache = caches[0];
    granRoble.leerAlmacenamiento (primerCache, informacion => {
        console.log (informacion);
    })
});

// Enviar incormación entre los nidos.
granRoble.send ("Pastura de vacas", "nota", "Vamos a graznar a las 7pm", () => console.log("Nota recibida."));

// REcibir la solicitud y manejarla.
import {definirTipoSolicitud} from "./tecnologia-cuervo";

definirTipoSolicitud("nota", (nido, contenido, fuente, listo) => {
    console.log (`${nido.nombre} recibió nota: ${contenido}`);
    listo();
})

// Utilizando promesas.
function almacenamiento(nido, nombre) {
    return new Promise (resolve => {
        nido.leerAlmacenamiento (nombre, resultado => resolve(resultado));
    });
}

almacenamiento(granRoble, "enemigos").then(valor => console.log("obtuve", valor));