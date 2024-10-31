const nombres = ["Ana", "Luis", "María", "Carlos", "Sofía"]

const ul = document.createElement("ul")

for(let i=0;i<nombres.length;i++){
    const li = document.createElement("li")
    li.textContent=nombres[i]
    ul.appendChild(li)
}

document.getElementById("list").appendChild(ul)