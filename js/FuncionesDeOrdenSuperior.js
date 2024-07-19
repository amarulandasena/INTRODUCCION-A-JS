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

// Funciones de OS.
let personas = [{
    "id" : 1012123456,
    "nombre" : "Juan carlos",
    "apellido" : "Jimenez",
    "mayor_de_edad" : true
},{
    "id" : 1025638697,
    "nombre" : "Juliana",
    "apeliido" : "Perez",
    "mayor_de_edad" : true
},{
    "id" : 1024785698,
    "nombre" : "Vicente",
    "apellido" : "Nieto",
    "mayor_de_edad" : false
},{
    "id" : 1458759896,
    "nombre" : "Maria Camila",
    "apellido" : "Gutierrez",
    "mayor_de_edad" : true
}];

const filtrar = (array, prueba) => {
    let cumplen = [];
    for (let elemento of array){
        if (prueba(elemento)){
            cumplen.push(elemento);
        }
    }
    return cumplen;
}

const mapear = (array, mapeo) => {
    let mapeados = [];
    for (let elemento of array){
        mapeados.push(mapeo(elemento));
    }
    return mapeados;
}
let elementosFiltrados = filtrar(personas, personas => personas.mayor_de_edad);
console.log(mapear(elementosFiltrados, personas => personas.nombre));



