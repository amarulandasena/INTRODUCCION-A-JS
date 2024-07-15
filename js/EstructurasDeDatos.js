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
console.log(palabra2[3]);
console.log(palabra1.toUpperCase());
console.log(palabra2.toLowerCase());

let palabra3 = "Panaderia";
console.log("\n" + palabra3.slice(2, 5));
console.log(palabra3.indexOf("d"));
console.log(" espacioEnBlanco ".trim());        // Eliminar los espacios en blanco al inicio y al final.
console.log(palabra3.padStart(3, "#"));         // Rellena espacios al inicio con el carácter indicado.

let frase1 = "Los pajaros secretarios se especializan en pisotear";
let palabras1 = frase1.split(" ")               // Dividir una frase en un conjunto de palabras.
console.log(palabras1);         

let frase2 = ["los", "hombres", "también", "lloran"];
console.log(frase2.join(" "));

let repeticion = "Repetir";
console.log("\n" + repeticion.repeat(5));

// Agregar y  eliminar elementos de un conjunto o array.
let conjunto2 = [10, 30, 50, 70, 90];
conjunto2.push(110);
conjunto2.push(130, 150);
console.log("\nconjunto2: " + conjunto2);
conjunto2.pop();
console.log("conjunto2: " + conjunto2);

// Agregar y remover elementos al principio de un Array.
conjunto2.unshift(0, 5);
console.log("\nconjunto2 :" + conjunto2);
conjunto2.shift();
console.log("conjunto2 :" + conjunto2);

// Buscar un elemento dentro de un arreglo.
let encontrado = conjunto2.indexOf(50);
if (encontrado != -1){
    console.log("\nEl número 50 se encuentra en la posición " + encontrado);
}

let noEncontrado = conjunto2.lastIndexOf(40);
if (noEncontrado == -1){
    console.log("El número 40 no pertenece a este conjunto.")
}

// Copiar una parte del Array.
console.log(conjunto2.slice(2, 5));

let conjunto3 = conjunto1 + conjunto2;
console.log("\nconjunto3 : " + conjunto3);

// Crear un objeto.
let objeto1 = {
    nombre : "Juan Carlos",
    apellido : "Lopez",
    edad : 25,
    hobbies : ["Jugar fútbol", "Ver TV", "Leer", "Dormir"],
    soltero : true
};
console.log("\n" + objeto1.soltero);

objeto1.soltero = false;
console.log(objeto1.soltero);

// Validar la existencia de una propiedad.
console.log("direccion" in objeto1);
console.log(objeto1.keys);

// Arreglo como parámetro.
console.log(Math.max(1, 3, 5, 7, 9));
let numeros = [100, 200, 300, 400, 500, 600];
console.log(Math.min(25, 50, 75, ...numeros, 700, 800, 900));

