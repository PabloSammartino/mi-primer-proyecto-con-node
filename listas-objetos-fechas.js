// Listas --> también se la puede llamar array, arreglo o vectores
// Una lista es un conjunto de variables puestas en orden
// Ejemplo:
const lista1 = [1, "hola", true, false, undefined, null, "a"];
console.log(lista1);

// En este caso se toma como valor todos los valores de la lista1
const lista2 = new Array(lista1);
console.log(lista2);

// En este caso se le indica a la lista que tendrá 5 valores
const lista3 = new Array(5);
console.log(lista3);

// En este caso podemos tener una lista de listas
const lista4 = [lista1, lista2, lista3];
console.log(lista4);


// Objetos --> JS es un lenguaje orientado a objetos. Los objetos son representaciones en datos.
const coche = {
    color: "azul",
    marca: "Fiat",
    modelo: 2017,
    // Tambien puedo definir arrays dentro del objeto
    velocidades: [0, 25, 50, 100],
    // Tambien puedo definir un nuevo objeto dentro de este objeto
    datosDueño: {
        nombre: "Pablo",
        apellido: "Sammartino",
        domicilio: "santaMariaDeOro3226",
    }
}
// Para acceder a los atributos del objeto, lo hacemos a traves del operador punto .
console.log(coche.color);
console.log(coche.marca);
console.log(coche.modelo);
console.log(coche.velocidades);
console.log(coche.datosDueño);
// Tambien podemos acceder a un atributo en especifico de ese objeto
console.log(coche.datosDueño.nombre);
console.log(coche.datosDueño.apellido);
console.log(coche.datosDueño.domicilio);
// Tambien podemos definir un nuevo atributo para ese objeto por fuera de ese objeto
coche.numeroPuertas = 5;
console.log(coche.numeroPuertas);
// Tambien podemos modificar un atributo previamente definido dentro del objeto
coche.marca = "Renault";
console.log(coche.marca);


// Fechas
// Existen Librerias de apoyo como Moment.js
// Para crear una fecha:
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10);
console.log(fecha_milis);

const fecha_cadena = new Date ("april 22 1996");
console.log(fecha_cadena);

// El valor de las meses es igual a las listas, comienzan en 0, es decir, enero = 0
const fecha_valores1 = new Date (2022, 0, 15);
console.log(fecha_valores1);


