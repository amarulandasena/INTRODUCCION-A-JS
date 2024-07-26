// Trabajaremos lo relacionado con la POO.

// Método simple.
let conejo = {};
conejo.hablar = function (linea) {
    console.log("El conejo dice " + `${linea}`);
}
conejo.hablar("estoy vivo");

// Método como propiedad de un objeto.
function hablar1 (linea) {
    console.log("El conejo " + `${this.tipo}` + " dice " + `${linea}`);
}
let conejoBlanco = {
    tipo : "blanco",
    hablar1
};
let conejoHambriento = {
    tipo : "hambriento",
    hablar1
};

conejoBlanco.hablar1("Oh mis orejas y bigotes, " + "que tarde se está haciendo!");
conejoHambriento.hablar1("podría comerme una zanahoria ahora mismo.");

hablar1.call(conejoBlanco, "oh my god!");       // puedo usar el método call para usar funciones como métodos de objetos.

// Mapas.
let edades = new Map();
edades.set("Boris", 39);
edades.set("Liang", 22);
edades.set("Julia", 62);

/* console.log(`Claves del mapa: ${edades.keys()}`); */
console.log(`Julia tiene ${edades.get("Julia")}`);
console.log(edades.has("Felipe"));
/* console.log(edades.hasOwnProperty("Liang")); */

// Iteradores.
let iteradorOK = "OK"[Symbol.iterator]();
console.log(iteradorOK.next());             /* value = valor del caracter, done = que me indica si hay o no mas resultados */
console.log(iteradorOK.next());
console.log(iteradorOK.next());

