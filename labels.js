// Labels: las etiquetas nos permiten nombrar los bucles for o while


let unidades = 0;
let decenas = 0;

bucleDecenas: while (true){
    bucleUnidades: while (true){
        console.log(`El número actual es: ${decenas}${unidades}`);
        unidades++
        if (unidades ===10){
            unidades = 0;
            break bucleUnidades;
        }
        if (decenas === 2){
            break bucleDecenas;
        }
    }
    decenas++
}