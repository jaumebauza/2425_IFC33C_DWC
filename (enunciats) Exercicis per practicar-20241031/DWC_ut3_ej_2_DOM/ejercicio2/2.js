const imatges = [
    { url: "https://picsum.photos/200", descripcion: "Imatge 1" },
    { url: "https://picsum.photos/200", descripcion: "Imatge 2" },
    { url: "https://picsum.photos/200", descripcion: "Imatge 3" },
    { url: "https://picsum.photos/200", descripcion: "Imatge 4" }
]

function galeria(){
    const galeri=document.getElementById("galeri")

    let contenidorImatge
    let imatge
    let descripcio
    for(let i=0;i< imatges.length;i++){
        contenidorImatge = document.createElement("div")
        

        imatge=document.createElement("img")
        imatge.src=imatges[i].url
        imatge.alt=imatges[i].descripcion

        descripcio=document.createElement("p")
        descripcio.textContent=imatges[i].descripcion

        contenidorImatge.appendChild(imatge)
        contenidorImatge.appendChild(descripcio)
        galeri.appendChild(contenidorImatge)
    }
}
galeria()