// Crea un archivo JS que contenga las siguientes líneas
// - Una función sin parámetros que devuelva siempre "true"

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
// - Una función generadora de índices pares automáticos

function sinParm(){
    return true
}
sinParm()

async function conProm() {
    setTimeout(() => {console.log("Hola soy una promesa")}, 5000);
}

conProm()

function* generadora(){
    let i=0;
    while(true){
        yield i+=2
    }
}
const gen= generadora();

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

