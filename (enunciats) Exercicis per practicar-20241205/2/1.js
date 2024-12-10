
const numeros = [1, 5, 3, 9, 2, 4]

let ordena = (numeros) => {
    
    let numerosAsc = [numeros].sort((a, b) => a - b)
    let numerosDes = [numeros].sort((a, b) => b - a)

    
    crearLista(numerosAsc, 'ascendente')
    crearLista(numerosDes, 'descendente')
};

let crearLista = (array, idContenedor) => {
    
    const contenedor = document.getElementById(idContenedor)
    const ul = document.createElement('ul')

   
    array.forEach((num) => {
        const li = document.createElement('li')
        li.textContent = num
        ul.appendChild(li)
    })

    contenedor.appendChild(ul)
}


ordena(numeros)
