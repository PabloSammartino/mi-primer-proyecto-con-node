// Comparaciones

// Igualdad --> se escribe con doble igual (==) o triple (===), doble es más débil, triple es más fuerte
// Doble == --> solo compara el valor
// Triple === --> compara el valor y el tipo de dato
if (5==5){
    console.log("5 es igual a 5 - Débil");
}

if (10===10){
    console.log("10 es igual a 10 - Fuerte")
}

// Ejemplo triple igual ===

let a = 5;
console.log(typeof 5)
let b = "5";
console.log(typeof "5")
if (a === b){
    console.log("5 es igual a 5")
} // En este caso, a no es igual a b, porque son tipo de datos distintos (number y string)

// Desigualdad, existen 3 tipos:

// Débil --> mismo caso, con un solo igual compara valor
let c = 10;
let d = 15;
if (c != d){
    console.log("c es diferente a d - Débil")
}
// Fuerte --> mismo caso, con doble igual compara valor y tipo de dato
let e = 20;
let f = "20";
if (c !== 20){
    console.log("e es diferente a f - Fuerte")
}

// Comparaciones mayor que y menor que
let max = 10;
let min = 5;
if (max > min){
    console.log("max es mayor que min")
}
if (max >= min){
    console.log("max es mayor que min")
}
if (min <= max){
    console.log("min es menor que max")
}
