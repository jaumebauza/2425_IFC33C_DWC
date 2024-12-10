const numeros = [1,5,3,9,2,4]
const ascendentets = [nemeros].sort((a,b) => a-b)
const descendentes = [numeros].sort((a,b) => b-a)

function crearLista(array, idContenedor) {
    const contenedor = document.getElementById(idContenedor)
    const ul = document.createElement('ul')

    array.forEach((num) => {
        const li = document.createElement('li')
        li.textContent = num
        ul.appendChild(li)
    })

    contenedor.appendChild(ul)
}

crearLista(ascendentes, 'ascendente')
crearLista(descendentes, 'descendente')