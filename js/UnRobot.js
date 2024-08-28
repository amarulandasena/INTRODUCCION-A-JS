// Desarrollar un autómata, un robót de entregas por correo.

const caminos = [
    "casa de alicia - casa de bob", "casa de alicia - cabaña", "casa de alicia - oficina de correos",
    "casa de bob - ayuntamiento", "casa de daria - casa de ernie", "casa de daria - ayuntamiento",
    "casa de ernie - casa de grete", "casa de grete - granja", "casa de grete - tienda",
    "mercado - granja", "mercado - oficina de correos", "mercado - tienda",
    "mercado - ayuntamiento", "tienda - ayuntamiento"
]

// Construir un grafo, o caminos entre los puntos.

function construirGrafo (bordes) {

    let grafo = Object.create(null);

    function añadirBorde (desde, hasta) {
        
        if (grafo[desde] == null) {
            grafo[desde] = [hasta];
        } else {
            grafo[desde].push(hasta);
        }
    }

    for (let [desde, hasta] of bordes.map(c => c.split("-"))) {
        añadirBorde(desde, hasta);
        añadirBorde(hasta, desde);
    }
    return grafo;
}

const grafoCamino = construirGrafo(caminos);
console.log(grafoCamino);