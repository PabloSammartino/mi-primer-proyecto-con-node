// Casos muy específicos de estructuras de control --> break y continue
// No es una buena práctica utilizar el break y el continue


let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Ejemplo break -- lo que hace es: si lista es mayor que 5, llega hasta ahí, entonces muestra hasta el 5
for(let i = 0; i < lista.length; i++){
    if (lista[i]> 5){
        break;
    }
    console.log(lista[i]);
}
//Ejemplo continue --> lo que hace es: llega hasta el 2, quita el 3, y continua
for (let a=0; a < lista.length; a++){
    if (lista[a] === 3){
        continue;
    }
    console.log(lista[a]);
}


// ¿Cuál es el ámbito de un bucle? --> se refiere al alcance que tienen las variables declaradas dentro de un bucle
// Cuando declaramos una variable dentro de un bucle nos conviene siempre declararla con let
// Esto es porque la declaracion de variable let afecta solo al bucle, en cambio var afecta a todo el código

for (let j = 0; j < 5; j++){
    console.log(j);
    var k = 100;
}
console.log(k);
console.log(j);
