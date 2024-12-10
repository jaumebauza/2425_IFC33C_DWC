const persones = [
    { nom: "pep", edad: 34 },
    { nom: "tomeu", edad: 14 },
    { nom: "joan", edad: 24 }
];

let ordena = (persones) => {
    crearLista(persones, "original")

    let personesOrdenades = [...persones].sort((a, b) => a.edad - b.edad)

    crearLista(personesOrdenades,"ordenat")
}

let crearLista = (array, idContenedor) => {
    
    const contenedor = document.getElementById(idContenedor)
    const ul = document.createElement('ul')

   
    array.forEach((persona) => {
        const li = document.createElement('li')
        li.textContent = `${persona.nom} (${persona.edad} años)`
        ul.appendChild(li)
    })


    contenedor.appendChild(ul)
}


ordena(persones)