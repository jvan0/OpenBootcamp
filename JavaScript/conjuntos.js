// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
// - Un nuevo Set con los nombres de tu familia
// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

const familia = new Set(["Cristina","Fabio","Ana","Juan","Agustin","Mateo"]);

familia.add("Juan")
familia.add("JavaScript")

console.log(familia)