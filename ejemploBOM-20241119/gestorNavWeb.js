
function mostrarURLActual(){
    alert(window.location.href)
}

function irAtras() {
    try {
        window.history.back();
    } catch (error) {
        alert("No hay más páginas en esa dirección");
    }
}

function irAdelante() {
    try {
        window.history.forward();
    } catch (error) {
        alert("No hay más páginas en esa dirección");
    }
}

function mostrarInfoNavegador(){
    alert("Nombre del navegador: "+window.navigator.appName+"\n"+
        " Idioma del navegador: "+ window.navigator.language+"\n"+
        " Esta en linia: "+window.navigator.onLine )
}


function redirigirURL(){
    window.location.assign(document.getElementById("urlInput").value)
}

var noufinestra;
function abrirPopup(){
    noufinestra = window.open("https://paucasesnovescifp.cat/","","width=900,height=600");
}

function cerrarPopup(){
    noufinestra.close();
}


