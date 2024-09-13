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

// Recibir la solicitud y manejarla.
import {definirTipoSolicitud} from "./tecnologia-cuervo";

/*definirTipoSolicitud("nota", (nido, contenido, fuente, listo) => {
    console.log (`${nido.nombre} recibió nota: ${contenido}`);
    listo();
})*/

// Utilizando promesas.
function almacenamiento(nido, nombre) {
    return new Promise (resolve => {
        nido.leerAlmacenamiento (nombre, resultado => resolve(resultado));
    });
}

almacenamiento(granRoble, "enemigos").then(valor => console.log("obtuve", valor));

// Manejo de excepciones con promesas.
function request (nido, objetivo, tipo, contenido) {
    
    return new Promise ((resolve, reject) => {
        let listo = false;
        function intentar (n) {
            nido.send(objetivo, tipo, contenido, (fallo, value) => {
                listo = true;
                if (fallo) {
                    reject (fallo);
                } else {
                    resolve (value);
                }
            });

            setTimeout (() => {
                if (listo) {
                    return;
                } else if (n < 3) {
                    intentar (n + 1);
                } else {
                    reject (new TiempoDeEspera ("Tiempo de espera agotado"));
                }
            }, 250);
        }
        intentar (1);
    });
}

function tipoDeSolicitud (nombre, manejador) {
    definirTipoSolicitud (nombre, (nido, contenido, fuente, devolucionDeLLamada) => {
        try {
            Promise.resolve (manejador(nido, contenido, fuente)).then(response => devolucionDeLLamada(null, response), failure => devolucionDeLLamada(failure));
        } catch (exception) {
            devolucionDeLLamada(exception);
        }
    });
}