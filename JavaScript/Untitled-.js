// - Una variable que contenga la lista de la compra (mínimo 5 elementos)-
// - Modifica la lista de la compra y añádele "Aceite de Girasol"-
// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"-
// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const listaDeCompras = ["Sal", "Azucar","Carne","Yerba","Harina"];

listaDeCompras.push("Aceite de Girasol");
listaDeCompras.pop();

console.log(listaDeCompras);

const peliculasFav =[
    {titulo:"Top Gun: Maverik", director:"Joseph Kosinski", fecha:"2022"},
    {titulo:"Avatar", director:"James Cameron", fecha:"2010"},
    {titulo:"Shape Of Water", director:"Guillermo del Toro", fecha:"2017"}
]
const filtrado = peliculasFav.filter(f => f.fecha >= 2010)
const directores = peliculasFav.map(direc => direc.director)
const titulos = peliculasFav.map( t => t.titulo)
const direcYTitulo = directores.concat(titulos)
const direcYTitulo2 = [...directores, ...titulos]

console.log(direcYTitulo2)