let nombre="Juan",
apellido="Cassou",
estudiante = nombre +" "+ apellido;

let estudianteMayus= estudiante.toUpperCase(),
estudianteMinus = estudiante.toLocaleLowerCase(),
numeroDeLetras = estudiante.length,
primeraLetra = estudiante.charAt(),
ultimaLetra = estudiante.charAt(estudiante.length-1),
sinEspacios = estudiante.replace(/ /g, ""),
contenido = estudiante.includes(nombre);


console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(numeroDeLetras);
console.log(primeraLetra);
console.log(ultimaLetra);
console.log(sinEspacios);
console.log(contenido);