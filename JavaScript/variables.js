/*Enunciado del ejercicio: 
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)*/

const Persona=[
    "Juan",
    23,
    true,
    new Date(1999, 04, 12),
    {
        titulo:"Analisis tecnico de los Mercados Financieros",
        Autor:"John Murphy",
        fecha: 1997,
        url: "https://www.amazon.es/dp/B0062XBS32",
    },
];
console.log(Persona)