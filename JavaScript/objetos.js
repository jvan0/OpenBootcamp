// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

// - Una variable que obtenga tu edad a partir del objeto anterior
// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const datosJuan = {
    nombre: "Juan",
    apellido: "Cassou",
    edad: 23,
    altura: 183,
    eresDesarrollador: true
}
const edad=datosJuan.edad;

const datosPersonales=[
    datosJuan, 
    datosMatias={
        nombre:"Matias",
        apellido:"Garica",
        edad: 24,
        altura: 185,
        eresDesarrollador: false
    }, 
    datosNico={
        nombre:"Nicolas",
        apellido:"ALonso",
        edad: 24,
        altura: 180,
        eresDesarrollador: false
    }]

const datosOrdenados = datosPersonales.sort((b,a) => a.edad - b.edad)
console.log(datosOrdenados)