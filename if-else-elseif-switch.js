// Estructuras de control --> es una metodología que nos permite tener mayor control de nuestro código

// Son dos:

// 1) Bifurcaciones --> son estructuras que nos permiten decidir si ir por un camino o por otro camino
// if / else

let saldo = 100;
let efectivo = 100;

if (efectivo <= saldo){
    console.log("Puedes sacar dinero")
} else {
    console.log("No puedes sacar dinero")
}

// else if

let nota = 0
if (nota === 5){
    console.log("Muy bueno")
} else if (nota === 4){
    console.log("Bueno")
} else if (nota === 3){
    console.log("Regular")
} else if (nota === 2){
    console.log("Malo")
} else if (nota === 1){
    console.log("Muy malo")
} else if (nota === 0){
    console.log("Error, introduzca un valor entre el 1 y el 5")
}

// Para evitar todo ese bloque de código, podemos utilizar un switch
// Ejemplo switch

let notaExamen = 5;

switch (notaExamen){
    case 5: console.log("Muy bueno")
    break;
    case 4: console.log("Bueno")
    break;
    case 3: console.log("Regular")
    break;
    case 2: console.log("Malo")
    break;
    case 1: console.log("Muy malo")
    break;
    default: console.log("Error")
}