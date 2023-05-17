// Bucles While
// Existen dos tipos: while - do while
//Sintaxis del bucle while:
// while (condicion){
    //contenido del bucle
//}

let i = 0;
let max = 10;
while (i < max){
    console.log(i);
    i++;
}

// do while: la única diferencia es que la primera vez siempre se ejecuta

i = 12;
do {
    i++;
} while (i < max){
    console.log(i);
}