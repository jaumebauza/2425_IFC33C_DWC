function Carta(valor, palo, color){
    this.valor = valor;
    this.palo = palo;
    this.color = color;
}

let arrayValores = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "jack", "queen", "king"];
let arrayPalos = ["clubs", "diamonds", "hearts", "spades"];

let baraja = [];
let color;

for (let palo of arrayPalos) {
    for (let valor of arrayValores) {
        if (palo === "hearts" || palo ==="diamonds") {
            color = "rojo";
        } else {
            color = "negro";
        }

        baraja.push(new Carta(valor, palo, color));
        
    }
}



function obtenerMano(baraja){
    let mano = [];
    let indice;

    for (let i=0; i<5; i++) {
        indice = Math.floor(Math.random()*baraja.length);
        mano.push(baraja.splice(indice, 1)[0]);
    }

    return mano
}

function trampes(){
    
}

function jugar() {
    

    let app = document.querySelector("#app");
    app.innerHTML = "";

    let mano = obtenerMano(baraja);

    for (let carta of mano) {
        console.log(carta);
        app.innerHTML += `<img height= 200 width= 150 src="cards/${carta.valor}_of_${carta.palo}.png">`;
    }

    let hayPareja = false;

    for (let i=0; i<mano.length; i++) {
        for (let j=i+1; j<mano.length; j++){
            if (mano[i].valor === mano[j].valor) {
                hayPareja = true;
            }
        }
    }

    if (hayPareja) {
        app.innerHTML += "<p>Has ganado!!</p>"
    }
}