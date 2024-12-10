var partitures = [
    { títol: "La Balanguera", idioma: "ca" },
    { títol: "Marry Christmas", idioma: "en" },
    { títol: "Frère Jacques", idioma: "fr" }
]

var taula = document.getElementById("taulaPartitures")

var thead = document.createElement("thead")
var filaEncap = document.createElement("tr")

var thTítol = document.createElement("th")
thTítol.textContent = "Títol"
filaEncap.appendChild(thTítol)

var thIdioma = document.createElement("th")
thIdioma.textContent = "Idioma original"
filaEncap.appendChild(thIdioma)

var thAccions = document.createElement("th")
thAccions.textContent = "Accions"
filaEncap.appendChild(thAccions)

thead.appendChild(filaEncap)
taula.appendChild(thead)

var tbody = document.createElement("tbody")

for (var i = 0; i < 100; i++) {
    var fila = document.createElement("tr")

    var celdaTítol = document.createElement("td")
    if (i < 3) {
        celdaTítol.textContent = partitures[i].títol
    } else {
        celdaTítol.textContent = partitures[0].títol 
    }

    var celdaIdioma = document.createElement("td")
    if (i < 3) {
        celdaIdioma.textContent = partitures[i].idioma
    } else {
        celdaIdioma.textContent = partitures[0].idioma
    }

    var celdaAccions = document.createElement("td")

    var enlaceEditar = document.createElement("a")
    enlaceEditar.href = "#"
    enlaceEditar.classList.add("link")
    enlaceEditar.innerHTML = '<i class="fa fa-edit"></i> Editar'

    var enlaceEsborrar = document.createElement("a")
    enlaceEsborrar.href = "#"
    enlaceEsborrar.classList.add("link")
    enlaceEsborrar.innerHTML = '<i class="fa fa-trash"></i> Esborrar'
    enlaceEsborrar.setAttribute("onclick", "esborrar(" + i + ")");

    
    

    celdaAccions.appendChild(enlaceEditar)
    celdaAccions.appendChild(enlaceEsborrar)

    fila.appendChild(celdaTítol)
    fila.appendChild(celdaIdioma)
    fila.appendChild(celdaAccions)

    tbody.appendChild(fila)
}


var confirmacio
function esborrar(i){
    confirmacio = confirm("Estàs segur que vols esborrar l'element "+(i+1)+"?")
        if (confirmacio) {
            alert("Element esborrat")
        } else {
            alert("Has cancel·lat l'accio")
        }
}


function obrirLogin() {
    var width = 900
    var height = 600
    var left = window.screenX + (window.innerWidth - width) / 2
    var top = window.screenY + (window.innerHeight - height) / 2

    noufinestra = window.open("../PIANOCLASE/login.html", "", 
        "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top)
}





taula.appendChild(tbody)
