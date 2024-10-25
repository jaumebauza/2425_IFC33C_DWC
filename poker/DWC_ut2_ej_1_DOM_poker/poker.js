
var palos = ['hearts', 'clubs', 'spades', 'diamonds'];
var numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];


var baraja = [];


for (var i = 0; i < palos.length; i++) {
    for (var j = 0; j < numeros.length; j++) {
        var carta={
        nom:numeros[j]+" "+palos[i],
        imatge: '../DWC_ut2_ej_1_DOM_poker/cards/'+numeros[j]+'_of_'+palos[i]+'.png'
        }
        baraja.push(carta)
    }
}

function barajar(baraja){
    return baraja.sort(
        function(){
            return Math.random() -0.5
        }
    )
}

function jugar(){


    var cartesSeleccionades = barajar(baraja).slice(0, 5)

    var cartesDiv = document.getElementById('cartes')
    cartesDiv.innerHTML = ''

    cartesSeleccionades.forEach(carta => {
        var imgElement = document.createElement('img')
        imgElement.src = carta.imatge;
        imgElement.alt = carta.nom;
        imgElement.style.width = '100px';
        cartesDiv.appendChild(imgElement);
    })
}
