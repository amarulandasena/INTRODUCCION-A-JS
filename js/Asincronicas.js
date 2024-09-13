// Busqueda del alimeto oculto.
import {granRoble, todosLados, definirTipoSolicitud} from "./tecnologia-cuervo";

granRoble.leerAlmacenamiento ("caches de alimentos", caches => {
    let primerCache = caches[0];
    granRoble.leerAlmacenamiento (primerCache, informacion => {
        console.log (informacion);
    })
});

// Enviar incormación entre los nidos.
granRoble.send ("Pastura de vacas", "nota", "Vamos a graznar a las 7pm", () => console.log("Nota recibida."));

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

// Inundar la red
todosLados (nido => {
    nido.estado.chismorreo = [];
});

function enviarChismorreo (nido, mensaje, exceptoPor = null){
    nido.estado.chismorreo.push(mensaje);
    
    for (let vecino of nido.vecinos) {
        if (vecino == exceptoPor) {
            continue; 
        } else {
            request (nido, vecino, "chismorreo", mensaje);
        }    
    }
}

requestType ("chismorreo", (nido, mensaje, fuente => {
    if (nido.estado.chismorreo.includes(mensaje)) {
        return;
    } else {
        console.log (`${nido.nombre} recibió chismorreo '${mensaje}' de '${fuente}'`);
        enviarChismorreo (nido, mensaje, fuente);
    }
}))

// Enrutamiento.
tipoDeSolicitud ("conexiones", (nido, {nombre, vecinos}, fuente) => {
    let conexiones = nido.estado.conexiones;

    if (JSON.stringify(conexiones.get(nombre)) == JSON.stringify(vecinos)) {
        return;
    } else {
        conexiones.set(nombre, vecinos);
        difundirConexiones(nido, nombre, fuente);
    }
})

function difundirConexiones (nido, nombre, exceptoPor = null) {
    for (let vecino of nido.vecinos) {
        if (vecino == exceptoPor){
            continue;
        } else {
            solicitud (nido, vecino, "conexiones", {
                nombre,
                vecinos : nido.estado.conexiones.get(nombre)
            });
        }
    }
}

todosLados (nido => {
    nido.estado.conexiones = new Map;
    nido.estado.conexiones.set(nido.nombre, nido.vecinos);
    difundirConexiones(nido, nido.nombre);
})

function encontrarRuta (desde, hasta, conexiones) {
    let trabajo = [{
        donde : desde,
        via : null
    }]

    for (let i =0; i < trabajo.length; i++) {
        let {donde, via} = trabajo[i];

        for (let siguiente of conexiones.get(donde) || []) {
            if (siguiente == hasta) {
                return via;
            }

            if (!trabajo.some(w => w.donde == siguiente)) {
                trabajo.push({donde: siguiente, via: via || siguiente});
            }
        }
    }
    return null;
}

function solicitudRuta(nido, objetivo, tipo, contenido) {
   
    if (nido.vecinos.includes(objetivo)) {
        return solicitud(nido, objetivo, tipo, contenido);
    } else {
        let via = encontrarRuta(nido.nombre, objetivo, nido.estado.conexiones);
    }

    if (!via) {
        throw new Error(`No hay rutas disponibles hacia ${objetivo}`);
    }

    return solicitud(nido, via, "ruta", {objetivo, tipo, contenido});
}

tipoSolicitud("ruta", (nido, {objetivo, tipo, contenido}) => {
    return solicitudRuta(nido, objetivo, tipo, contenido);
});