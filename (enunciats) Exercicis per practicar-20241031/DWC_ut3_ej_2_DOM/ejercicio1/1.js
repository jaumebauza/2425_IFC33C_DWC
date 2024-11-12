function generarTaula(){
    const taula= document.createElement("table")

    const encabezado= taula.insertRow()
    let celdaEncabezado = encabezado.insertCell()
    celdaEncabezado.textContent =""
    
    for (let i = 1;i<=10;i++){
        celdaEncabezado = encabezado.insertCell()
        celdaEncabezado.textContent=i
    }

    let celdaEncabezadoFila
    let celda
    let fila
    for (let i=1;i<=10;i++){
        fila = taula.insertRow()
        celdaEncabezadoFila=fila.insertCell()
        celdaEncabezadoFila.textContent=i

        for(let j=1;j<=10;j++){
            celda =fila.insertCell()
            celda.textContent=i*j
        }
    }

    document.getElementById("taulaMultiplicar").appendChild(taula)
}
generarTaula()