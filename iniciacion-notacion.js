// Notación

// ; --> sirve para delimitar el final de una linea
const b = 4;

// . --> se utiliza en los objetos para acceder a los atributos
// movil.ancho
// movil.alto
// auto.color
// auto.numPuertas

// [] --> se utiliza para las listas, arreglos o arrays o bien para acceder a espacios de memoria
const ar = [1, 2, 3, 4];
console.log(ar[0]);
console.log(ar[1]);
console.log(ar[2]);
console.log(ar[3]);
// Tener siempre en cuenta que las posiciones en memoria comienzan en 0, por lo tanto, si quiero acceder al primer valor, debo comenzar con el 0.


// () --> se utilizan para funciones
function suma(a, b){
    // Se escribe la función
}

// {} --> se utilizan para delimitar el alcance de objetos, funciones y estructuras de control
const movil = {
    anchura: 5,
    altura: 10,
    color: "negro"
}

//Ejemplo estructura de control
if (true){
    const constante2 = "hola";
}