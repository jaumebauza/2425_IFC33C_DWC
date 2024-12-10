const pinta = () => {  
    let p = document.createElement("p")  
    p.innerHTML = "Este es un párrafo dinámico" 
    document.body.appendChild(p)
}  

pinta();