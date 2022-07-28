// Replica el ejercicio completo del vídeo
// - Añade dos párrafos más en cada una de las secciones
// - Pon un icono de papelera para eliminar párrafos (Esta imagen puede valer: 
// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMWeEC0tULzOjfWFAOdOHjUw9WjXhBDbirg&usqp=CAU)
// - Añade el código necesario para que al arrastrar un fragmento del puzzle a la papelera, éste se elimine


const parrafos = document.querySelectorAll(".parrafo")
const sections = document.querySelectorAll(".section")
const papelera = document.querySelectorAll(".papelera")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event=> {
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
    })
    parrafo.addEventListener("dragend", () =>{
        parrafo.classList.remove("dragging")
    })
})

sections.forEach(section =>{ 
    section.addEventListener("dragover", event =>{
        event.preventDefault()
        event.dataTransfer.dropEffect = "copy"
    })
    section.addEventListener("drop", event =>{
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        section.appendChild(parrafo)
    })
})

papelera.forEach(papelera =>{
    papelera.addEventListener("dragover", event =>{
        event.preventDefault()
    })
    papelera.addEventListener("drop", event =>{
        const id_parrafo = event.dataTransfer.getData("id")
        document.getElementById(id_parrafo).remove()
    })
})