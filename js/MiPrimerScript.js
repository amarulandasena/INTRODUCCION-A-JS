const miPrimerScript = () => {
    prompt("Ingrese su contraseña: ")
    alert("Hola, bienvenido al mundo de Javascript");

    // Introducción a funciones.
    let numero;
    numero = Number(prompt("Ingrese un número entero: "));
    let cuadrado;
    cuadrado = Math.pow(numero, 2);
    alert("El cuadrado del número ingresado es: " + cuadrado);

    // Condicional simple.
    let numero1 = Number(prompt("Ingrese un nuevo número: "));
    if(!Number.isNaN(numero1)){
        alert("El cuadrado del número ingresado es: " + Math.pow(numero1, 2));
    };

    // Condicional doble.
    let numero2 = Number(prompt("Ingrese un número entero entre 0 y 20 : "));
    if (numero2 <= 10){
        alert("El número es menor o igual que 10");
    } else {
        alert("El número es mayor que 10.");
    };

    // Condicional multiple.
    let numero3 = Number(prompt("Ingrese un número entre 0 y 100: "));
    if (numero3 <= 10){
        alert("El número es muy pequeño");
    } else if (numero3 >= 10 && numero3 < 30){
        alert("El número es pequeño");
    } else if (numero3 >= 30 && numero3 < 60){
        alert("El número es grande");
    } else if(numero3 >= 60 && numero3 < 100){
        alert("El número es muy grande");
    } else {
        alert("El número es mayor que 100");
    }

}

// Declarar una variable.
let diez = 10;
console.log("Diez * Diez = " + diez * diez);

let humor = "buen";
console.log(humor);

humor = "mal";
console.log(humor);

let deuda = 1400000;
deuda -= 200000;
console.log("saldo de la deuda: $" + deuda);

let vacia;
console.log("variable vacia = " + vacia);

let numero1 = 10 , numero2 = 20;
console.log("numero1 + numero2 = " + (numero1 + numero2));

// Las palabras reservadas var y const.
var saludo1 = "Hola";
const saludo2 = "Andres Felipe";        // Constante.
console.log(saludo1 + " " + saludo2);

// Introducción a funciones.
console.log(Math.min(2,4,6,8,10,12,3,5,7,9,11));
console.log(Math.max(3,5,7,9,11) + 101 + Math.min(12,10,8,6,4,2));
console.log(Math.pow(3,2));

// While.
let contador = 0;
let potencia = 1;       // Almacenará el resultado de cada multiplicación.

while (contador < 10){
    potencia *= 2;      // Calcular el valor  de 2 a la 10.
    contador++;
}
console.log("2 ** 10 = " + potencia);

// for.
for (let contador1 = 0; contador1 <= 10; contador1 += 2){
    console.log(contador1);
}

// Break.
for (let contador2 = 2; contador2 <= 10; contador2 +=1){
    console.log(contador2);
    if ((20 / contador2) == 5){
        break;
    }
}

/* Switch
let diaSemana = Number(prompt("Ingrese un número entre 1 y 7: "))
switch (diaSemana){
    case 1:
        alert("Lunes");
        break;
    case 2:
        alert("Martes");
        break;
    case 3:
        alert("Miercoles");
        break;
    case 4:
        alert("Jueves");
        break;
    case 5:
        alert("Viernes");
        break;
    case 6:
        alert("Sabado");
        break;
    case 7:
        alert("Domingo");
        break;
    default:
        alert("Número incorrecto");
} */








