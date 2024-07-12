// Conjunto de datos.
let conjunto1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Acceder a dos de los datos del conjunto.
console.log("Primer elemento del conjunto: " + conjunto1[0]);
console.log("Quinto elemento del conjunto: " + conjunto1[4]);

// Obtener la longitud de un Array.
console.log("Longitud del conjunto: " + conjunto1.length);

// Convertir un string a mayúsculas y minúsculas.
let palabra1 = "hola mundo";
let palabra2 = "FELICIDADES";
console.log(palabra1.toUpperCase());
console.log(palabra2.toLowerCase());

// Agregar y  eliminar elementos de un conjunto o array.
let conjunto2 = [10, 30, 50, 70, 90];
conjunto2.push(110);
conjunto2.push(130, 150);
console.log("conjunto2: " + conjunto2);
conjunto2.pop();
console.log("conjunto2: " + conjunto2);

// Crear un objeto.
let objeto1 = {
    nombre : "Juan Carlos",
    apellido : "Lopez",
    edad : 25,
    hobbies : ["Jugar fútbol", "Ver TV", "Leer", "Dormir"],
    soltero : true
};
console.log(objeto1.soltero);

objeto1.soltero = false;
console.log(objeto1.soltero);

// Validar la existencia de una propiedad.
console.log("direccion" in objeto1);
console.log(objeto1.keys);


