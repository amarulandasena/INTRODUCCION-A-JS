// Notación de clase.
class Vehiculo {
    constructor (marca, referencia, modelo, valor) {
        this.marca = marca;
        this.referencia = referencia;
        this.modelo = modelo;
        this.valor = valor;
    }

    mostrarEnPantalla () {
        console.log (`        
        Marca: ${this.marca} 
        Referencia: ${this.referencia}
        Modelo:  ${this.modelo}
        Valor: ${this.valor}`
        );
    }

    calcularDescuento () {
        return this.valor - this.valor * 0.1;
    }
}
const vehiculo1 = new Vehiculo ("Renault", "Megane", 2020, 42000000);
vehiculo1.mostrarEnPantalla();
console.log(vehiculo1.calcularDescuento());

// Array bidimensional.
class Matriz {
    constructor (ancho, altura, elemento = (x,y) => undefined) {
        this.ancho = ancho;
        this.altura = altura;
        this.contenido = [];

        // Como se le dan valores al atributo contenido.
        for (let y = 0; y < altura; y++){
            for (let x = 0; x < ancho; x++){
                this.contenido[y * ancho + x] = elemento(x,y);
            }
        }
    }

    obtener (x, y) {
        return this.contenido[y * this.ancho + x];
    }

    establecer (x, y, valor) {
        this.contenido[y * this.ancho + x] = valor;
    }
}

class IteradorMatriz {
    constructor (matriz) {
        this.x = 0;
        this.y = 0;
        this.matriz = matriz;
    }

    next () {
        if (this.y == this.matriz.altura) return {done : true};

        let value = {
            x : this.x,
            y : this.y,
            value : this.matriz.obtener(this.x, this.y)
        }
        this.x++
        if (this.x == this.matriz.ancho) {
            this.x = 0;
            this.y++;
        }
        return {value, done : false};
    }
}

Matriz.prototype[Symbol.iterator] = function () {
    return new IteradorMatriz(this);
};

let matriz = new Matriz (2, 2, (x,y) => `valor ${x},${y}`);
for (let {x, y, value} of matriz){
    console.log(x, y, value);
}



