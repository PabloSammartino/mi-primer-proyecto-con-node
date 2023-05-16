//Variable var

var variable1 = "Hola mundo";
var variable2 = 10;
var varibaleBoolean1 = true;

//Variable let

let variable3 = "Hola mundo";
let variable4 = 100;
let variableBoolean2 = false;

//Variable null

var variableNull = null;

//Null --> es un tipo de variable a la que previamente se le asignó un espacio en memoria, pero aún no reicbió ningún valor
//Undefined --> es un tipo de variable a la que no se le asignó ningún espacio en memoria

//Diferencia entre var y let --> var es un tipo de variable que afecta a todo el código, en cambio let solo afecta al bloque de código sobre el que estoy trabajando

//Ejemplo de var y let:

var textoVar = "soy una variable VAR";
let textoLet = "soy una veriable LET";

for (var i = 0; i < 3; i++){
    var textoVar = "Soy una variable VAR y modifico todo el código";
}

console.log(textoVar)

for (var i = 0; i > 3; i++){
    let textoLet = "soy una variable LET que solo afecta a este bloque";
}

console.log(textoLet)

console.log(typeof variable1);
console.log(typeof variable2);
console.log(typeof variable5);
console.log(typeof variableNull);