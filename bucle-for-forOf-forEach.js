// Bucles For:
// For --> son los bucles más utilizados. Se declara de la siguiente manera:
// for (inicializacion; condicion; actualizacion){
    // Esto es el contenido del bucle
// }

for (let i = 0; i < 10; i++){
    console.log(i)
}

let lista = [1, 3, 5, 8, 12, 50];
for (let f = 0; f < lista.length; f++){
    console.log(lista[f] * 2);
}

// En el caso de las listas, podemos usar la estructura for of:
for (let valor of lista){
    console.log(valor);
}

// Estructura forEach
lista.forEach(valor =>{
    console.log(valor);
})

// Para objetos:
let persona = {
    nombre: "pablo",
    apellido: "sammartino",
    telefono: 50505063
}

for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])
}