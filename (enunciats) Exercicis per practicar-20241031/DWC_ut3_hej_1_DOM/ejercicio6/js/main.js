const taula = [
    {nom:"jaume",edad:28,telefon:234234234},
    {nom:"toni",edad:24,telefon:123123123},
    {nom:"tomeu",edad:19,telefon:456456456}
]

const table = document.createElement("table")
const thead = document.createElement("thead")
const tbody = document.createElement("tbody")

const cap = ["nom","edad","telefon"]
const trHead= document.createElement("tr")

for(let i = 0;i<cap.length;i++){
    const th=document.createElement("th")
    th.textContent=cap[i]
    trHead.appendChild(th)
}
thead.appendChild(trHead)

for(let i=0;i<taula.length;i++){
    const tr = document.createElement("tr")
    const fila= taula[i]

    for(const valor in fila){
        const td=document.createElement("td")
        td.textContent = fila[valor]
        tr.appendChild(td)
    }

    tbody.appendChild(tr)
}

table.appendChild(thead)
table.appendChild(tbody)

document.getElementById("taula").appendChild(table)